import { ORDER_SIDE } from "./constants";

export const calculateOrderSize = (
  size: number | undefined,
  amount: number | undefined,
  execPrice: number | undefined
): number => {
  if (size && size > 0) return size;
  if (amount && execPrice) {
    const calculatedSize = Math.floor(amount / execPrice);
    if (calculatedSize > 0) return calculatedSize;
  }
  throw new Error("Invalid size or amount");
};

interface OrderFunds {
  cash: number;
  shares: number;
}

export const calculateFundsAndShares = (
  filledOrders: any[],
  instrumentId: number
): OrderFunds => {
  let cash = 0;
  let shares = 0;
  for (const order of filledOrders) {
    if (order.side === ORDER_SIDE.CASH_IN) cash += order.size ?? 0;
    if (order.side === ORDER_SIDE.CASH_OUT) cash -= order.size ?? 0;
    if (order.side === ORDER_SIDE.BUY && order.type !== ORDER_SIDE.CASH_IN)
      cash -= (order.size ?? 0) * Number(order.price ?? 0);
    if (order.side === ORDER_SIDE.SELL)
      cash += (order.size ?? 0) * Number(order.price ?? 0);
    if (order.instrumentid === instrumentId) {
      if (order.side === ORDER_SIDE.BUY && order.type !== ORDER_SIDE.CASH_IN)
        shares += order.size ?? 0;
      if (order.side === ORDER_SIDE.SELL) shares -= order.size ?? 0;
    }
  }
  return { cash, shares };
};

export const validateFundsAndShares = (params: {
  side: "BUY" | "SELL" | "CASH_IN" | "CASH_OUT";
  finalSize: number;
  execPrice: number | undefined;
  cash: number;
  shares: number;
}) => {
  const { side, finalSize, execPrice, cash, shares } = params;
  if (side === ORDER_SIDE.BUY && finalSize * (execPrice || 0) > cash) {
    throw new Error("Insufficient cash");
  }
  if (side === ORDER_SIDE.SELL && finalSize > shares) {
    throw new Error("Insufficient shares");
  }
};
