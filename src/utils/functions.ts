import { Order } from "@/entities/order";
import { ORDER_TYPES, ORDER_SIDE } from "./constants";

/**
 * Calculates the total cash balance based on the order history
 * @param orders List of executed orders
 * @returns Total cash balance
 */
export const calculateCash = (orders: Order[]): number => {
  let cash = 0;
  for (const order of orders) {
    if (order.side === ORDER_TYPES.CASH_IN) cash += order.size ?? 0;
    if (order.side === ORDER_TYPES.CASH_OUT) cash -= order.size ?? 0;
    if (order.side === ORDER_TYPES.BUY && order.type !== ORDER_TYPES.CASH_IN)
      cash -= (order.size ?? 0) * Number(order.price ?? 0);
    if (order.side === ORDER_SIDE.SELL)
      cash += (order.size ?? 0) * Number(order.price ?? 0);
  }
  return cash;
};

/**
 * Calculates the total shares balance for a specific instrument based on order history
 * @param orders List of executed orders
 * @param instrumentId ID of the instrument to calculate shares for
 * @returns Total shares balance for the instrument
 */
export const calculateShares = (
  orders: Order[],
  instrumentId: number
): number => {
  let shares = 0;

  const instrumentOrders = orders.filter(
    (order) => order.instrumentid === instrumentId
  );

  for (const order of instrumentOrders) {
    if (order.side === ORDER_SIDE.BUY && order.type !== ORDER_TYPES.CASH_IN)
      shares += order.size ?? 0;
    if (order.side === ORDER_SIDE.SELL) shares -= order.size ?? 0;
  }

  return shares;
};
