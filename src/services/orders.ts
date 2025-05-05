import { CreateOrder } from "@entities/order";
import { getInstrumentById } from "@repository/instruments";
import { getExecutionPrice } from "@repository/marketdata";
import { getUserOrdersByStatus } from "@repository/order";
import { createOrder as createOrderRepository } from "@repository/order";
import { calculateFundsAndShares, validateFundsAndShares } from "@utils/order";
import { ORDER_STATUS } from "@utils/constants";
import { calculateOrderSize } from "@utils/order";

const validateInstrumentById = async (instrumentId: number) => {
  const instrument = await getInstrumentById(instrumentId);
  if (!instrument) throw new Error("Instrument not found");
  return instrument;
};

export const createOrder = async (input: CreateOrder) => {
  const { userId, instrumentId, side, type, size, amount, price } = input;

  await validateInstrumentById(instrumentId);
  const execPrice = await getExecutionPrice(type, price, instrumentId);
  const finalSize = calculateOrderSize(size, amount, execPrice);
  const filledOrders = await getUserOrdersByStatus(
    userId,
    ORDER_STATUS.FILLED as keyof typeof ORDER_STATUS
  );

  const { cash, shares } = calculateFundsAndShares(filledOrders, instrumentId);

  validateFundsAndShares({ side, finalSize, execPrice, cash, shares });

  return await createOrderRepository({
    userId,
    instrumentId,
    side,
    type,
    finalSize,
    execPrice,
    price,
  });
};
