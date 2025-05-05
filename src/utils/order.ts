import { ORDER_SIDE } from "./constants";
import { calculateShares, calculateCash } from "./functions";

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
  const cash = calculateCash(filledOrders);
  const shares = calculateShares(filledOrders, instrumentId);

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
    throw new Error("Insufficient funds");
  }
  if (side === ORDER_SIDE.SELL && finalSize > shares) {
    throw new Error("Insufficient shares");
  }
};
