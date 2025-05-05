import { ORDER_STATUS, ORDER_SIDE, ORDER_TYPE } from "@utils/constants";
import { PrismaClient } from "@generated/prisma";

const prisma = new PrismaClient();

export const getUserOrdersByStatus = async (
  userId: number,
  status: keyof typeof ORDER_STATUS
) => {
  return prisma.orders.findMany({
    where: { userid: userId, status },
  });
};

export const createOrder = async (params: {
  userId: number;
  instrumentId: number;
  side: "BUY" | "SELL" | "CASH_IN" | "CASH_OUT";
  type: "MARKET" | "LIMIT";
  finalSize: number;
  execPrice: number | undefined;
  price: number | undefined;
}) => {
  const { userId, instrumentId, side, type, finalSize, execPrice, price } =
    params;

  if (type === ORDER_TYPE.MARKET) {
    return prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: execPrice,
        type,
        side,
        status: ORDER_STATUS.FILLED,
        datetime: new Date(),
      },
    });
  }

  if (type === ORDER_TYPE.LIMIT) {
    if (!price) throw new Error("Price required for LIMIT order");
    return prisma.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: finalSize,
        price: price,
        type,
        side,
        status: ORDER_STATUS.NEW,
        datetime: new Date(),
      },
    });
  }

  throw new Error("Invalid order type");
};
