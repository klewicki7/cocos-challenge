import { PrismaClient } from '@generated/prisma';

const prisma = new PrismaClient();

interface CreateOrderInput {
  userId: number;
  instrumentId: number;
  side: 'BUY' | 'SELL' | 'CASH_IN' | 'CASH_OUT';
  type: 'MARKET' | 'LIMIT';
  size?: number; // cantidad de acciones
  amount?: number; // monto en pesos
  price?: number; // solo para LIMIT
}

const createOrder = async (input: CreateOrderInput) => {
  const { userId, instrumentId, side, type, size, amount, price } = input;

  // Validar instrumento
  const instrument = await prisma.instruments.findUnique({ where: { id: instrumentId } });
  if (!instrument) throw new Error('Instrument not found');

  // Si es MARKET, obtener último precio
  let execPrice = price;
  if (type === 'MARKET') {
    const md = await prisma.marketdata.findFirst({
      where: { instrumentid: instrumentId },
      orderBy: { date: 'desc' },
    });
    if (!md || !md.close) throw new Error('No market price available');
    execPrice = Number(md.close);
  }

  // Calcular size si solo se envió amount
  let finalSize = size;
  if (!finalSize && amount && execPrice) {
    finalSize = Math.floor(amount / execPrice);
  }
  if (!finalSize || finalSize <= 0) throw new Error('Invalid size or amount');

  // Traer órdenes FILLED del usuario para validaciones
  const filledOrders = await prisma.orders.findMany({
    where: { userid: userId, status: 'FILLED' },
  });

  // Calcular cash disponible
  let cash = 0;
  for (const order of filledOrders) {
    if (order.side === 'CASH_IN') cash += order.size ?? 0;
    if (order.side === 'CASH_OUT') cash -= order.size ?? 0;
    if (order.side === 'BUY' && order.type !== 'CASH_IN') cash -= (order.size ?? 0) * Number(order.price ?? 0);
    if (order.side === 'SELL') cash += (order.size ?? 0) * Number(order.price ?? 0);
  }

  // Calcular acciones disponibles para este instrumento
  let shares = 0;
  for (const order of filledOrders) {
    if (order.instrumentid === instrumentId) {
      if (order.side === 'BUY' && order.type !== 'CASH_IN') shares += order.size ?? 0;
      if (order.side === 'SELL') shares -= order.size ?? 0;
    }
  }

  // Validaciones de fondos/acciones
  if (side === 'BUY' && (finalSize * (execPrice || 0) > cash)) {
    // No hay cash suficiente
    return await prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: execPrice,
        type,
        side,
        status: 'REJECTED',
        datetime: new Date(),
      },
    });
  }
  if (side === 'SELL' && finalSize > shares) {
    // No hay acciones suficientes
    return await prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: execPrice,
        type,
        side,
        status: 'REJECTED',
        datetime: new Date(),
      },
    });
  }

  // CASH_IN y CASH_OUT se ejecutan siempre
  if (side === 'CASH_IN' || side === 'CASH_OUT') {
    return await prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: 1,
        type: 'MARKET',
        side,
        status: 'FILLED',
        datetime: new Date(),
      },
    });
  }

  // Si es MARKET, ejecutar inmediatamente
  if (type === 'MARKET') {
    return await prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: execPrice,
        type,
        side,
        status: 'FILLED',
        datetime: new Date(),
      },
    });
  }

  // Si es LIMIT, crear con estado NEW
  if (type === 'LIMIT') {
    if (!price) throw new Error('Price required for LIMIT order');
    return await prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: price,
        type,
        side,
        status: 'NEW',
        datetime: new Date(),
      },
    });
  }

  throw new Error('Invalid order type');
};

const ordersService = { createOrder };

export default ordersService; 