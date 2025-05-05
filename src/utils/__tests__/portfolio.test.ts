import { calculateCash, buildPositionsMap, buildPortfolioPositions, calculateTotalValue } from "../portfolio";
import { ORDER_TYPES, ORDER_SIDE } from "../constants";

describe("calculateCash", () => {
  it("should calculate cash correctly", () => {
    const orders = [
      { side: ORDER_TYPES.CASH_IN, size: 1000 },
      { side: ORDER_TYPES.CASH_OUT, size: 200 },
      { side: ORDER_TYPES.BUY, type: "MARKET", size: 10, price: 100 },
      { side: ORDER_TYPES.SELL, type: "MARKET", size: 5, price: 110 },
    ];
    expect(calculateCash(orders as any)).toBe(1000 - 200 - 10 * 100 + 5 * 110);
  });
});

describe("buildPositionsMap", () => {
  it("should build positions map correctly", () => {
    const orders = [
      { side: ORDER_TYPES.BUY, type: "MARKET", size: 10, instrumentid: 1 },
      { side: ORDER_SIDE.SELL, type: "MARKET", size: 5, instrumentid: 1 },
      { side: ORDER_TYPES.BUY, type: "MARKET", size: 3, instrumentid: 2 },
    ];
    const map = buildPositionsMap(orders as any);
    expect(map[1].quantity).toBe(5);
    expect(map[2].quantity).toBe(3);
  });
});

describe("buildPortfolioPositions", () => {
  it("should build portfolio positions with market data", () => {
    const instruments = [
      { id: 1, ticker: "AAPL", name: "Apple", type: "Stock" },
      { id: 2, ticker: "GOOG", name: "Google", type: "Stock" },
    ];
    const marketData = [
      { instrumentid: 1, close: 100, previousclose: 90 },
      { instrumentid: 2, close: 200, previousclose: 180 },
    ];
    const positionsMap = { 1: { quantity: 10 }, 2: { quantity: 0 } };
    const result = buildPortfolioPositions({ instruments, marketData, positionsMap } as any);
    expect(result.length).toBe(1);
    expect(result[0].instrumentId).toBe(1);
    expect(result[0].marketValue).toBe("1.000,00");
    expect(result[0].performance).toBeCloseTo(11.111, 2);
  });
});

describe("calculateTotalValue", () => {
  it("should calculate total value as string", () => {
    const positions = [
      { marketValue: "1000", quantity: 1 },
      { marketValue: "2000", quantity: 2 },
    ];
    const result = calculateTotalValue(500, positions as any);
    expect(typeof result).toBe("string");
  });
}); 