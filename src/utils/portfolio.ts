import { Order } from "@entities/order";
import { PortfolioPosition } from "@entities/portfolio";
import { Instrument } from "@entities/instrument";
import { MarketData } from "@entities/marketdata";

/**
 * Calculates the total cash balance based on the order history
 * @param orders List of executed orders
 * @returns Total cash balance
 */
export const calculateCash = (orders: Order[]): number => {
  let cash = 0;
  for (const order of orders) {
    if (order.side === "CASH_IN") cash += order.size ?? 0;
    if (order.side === "CASH_OUT") cash -= order.size ?? 0;
    if (order.side === "BUY" && order.type !== "CASH_IN")
      cash -= (order.size ?? 0) * Number(order.price ?? 0);
    if (order.side === "SELL")
      cash += (order.size ?? 0) * Number(order.price ?? 0);
  }
  return cash;
};

/**
 * Creates a map of positions with their quantities from order history
 * @param orders List of executed orders
 * @returns Map of instrument IDs to their quantities
 */
export const buildPositionsMap = (
  orders: Order[]
): Record<number, { quantity: number }> => {
  const positionsMap: Record<number, { quantity: number }> = {};
  for (const order of orders) {
    if (
      order.side === "BUY" &&
      order.type !== "CASH_IN" &&
      order.instrumentid !== null
    ) {
      positionsMap[order.instrumentid] = positionsMap[order.instrumentid] || {
        quantity: 0,
      };
      positionsMap[order.instrumentid].quantity += order.size ?? 0;
    }
    if (order.side === "SELL" && order.instrumentid !== null) {
      positionsMap[order.instrumentid] = positionsMap[order.instrumentid] || {
        quantity: 0,
      };
      positionsMap[order.instrumentid].quantity -= order.size ?? 0;
    }
  }
  return positionsMap;
};

interface BuildPortfolioPositionsParams {
  instruments: Instrument[];
  marketData: MarketData[];
  positionsMap: Record<number, { quantity: number }>;
}

/**
 * Builds portfolio positions with market data and instrument information
 * @param params Object containing instruments, market data and positions map
 * @returns List of portfolio positions
 */
export const buildPortfolioPositions = (
  params: BuildPortfolioPositionsParams
): PortfolioPosition[] => {
  const { instruments, marketData, positionsMap } = params;
  
  return instruments
    .map((inst) => {
      const quantity =
        inst.id !== null ? positionsMap[inst.id]?.quantity || 0 : 0;
      const md = marketData.find((m) => m.instrumentid === inst.id);
      const close = md?.close ? Number(md.close) : 0;
      const previousClose = md?.previousclose ? Number(md.previousclose) : null;
      const marketValue = quantity * close;
      const performance =
        previousClose && previousClose !== 0
          ? ((close - previousClose) / previousClose) * 100
          : null;
      return {
        instrumentId: inst.id,
        ticker: inst.ticker ?? "",
        name: inst.name ?? "",
        type: inst.type ?? "",
        quantity,
        marketValue,
        performance,
      };
    })
    .filter((pos) => pos.quantity > 0);
};

/**
 * Calculates the total portfolio value including cash and positions
 * @param cash Cash balance
 * @param positions List of portfolio positions
 * @returns Total portfolio value
 */
export const calculateTotalValue = (
  cash: number,
  positions: PortfolioPosition[]
): number => {
  return cash + positions.reduce((sum, pos) => sum + pos.marketValue, 0);
}; 