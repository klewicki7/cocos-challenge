import { CreateOrder } from "@entities/order";
import { getInstrumentById } from "@/repositories/instruments";
import { getExecutionPrice } from "@/repositories/marketdata";
import { getUserOrdersByStatus } from "@/repositories/order";
import { createOrder as createOrderRepository } from "@/repositories/order";
import { calculateFundsAndShares, validateFundsAndShares } from "@utils/order";
import { ORDER_STATUS } from "@utils/constants";
import { calculateOrderSize } from "@utils/order";
import logger from "@utils/logger";

const validateInstrumentById = async (instrumentId: number) => {
  const instrument = await getInstrumentById(instrumentId);
  if (!instrument) throw new Error("Instrument not found");
  return instrument;
};

export const createOrder = async (input: CreateOrder) => {
  logger.info("[OrdersService] Start createOrder");
  try {
    const { userId, instrumentId, side, type, size, amount, price } = input;

    await validateInstrumentById(instrumentId);
    const execPrice = await getExecutionPrice(type, price, instrumentId);
    const finalSize = calculateOrderSize(size, amount, execPrice);
    const filledOrders = await getUserOrdersByStatus(
      userId,
      ORDER_STATUS.FILLED as keyof typeof ORDER_STATUS
    );

    const { cash, shares } = calculateFundsAndShares(
      filledOrders,
      instrumentId
    );

    validateFundsAndShares({ side, finalSize, execPrice, cash, shares });

    const order = await createOrderRepository({
      userId,
      instrumentId,
      side,
      type,
      finalSize,
      execPrice,
      price,
    });

    logger.info("[OrdersService] Success createOrder");
    return order;
  } catch (err) {
    logger.error(`[OrdersService] Error in createOrder: ${err}`);
    throw err;
  }
};
