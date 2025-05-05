import { calculateOrderSize, calculateFundsAndShares, validateFundsAndShares } from "../order";
import { ORDER_SIDE } from "../constants";

describe("calculateOrderSize", () => {
  it("should return size if provided and > 0", () => {
    expect(calculateOrderSize(5, undefined, 100)).toBe(5);
  });
  it("should calculate size from amount and execPrice", () => {
    expect(calculateOrderSize(undefined, 1000, 100)).toBe(10);
  });
  it("should throw if invalid size and amount", () => {
    expect(() => calculateOrderSize(undefined, undefined, 100)).toThrow("Invalid size or amount");
  });
});

describe("calculateFundsAndShares", () => {
  const orders = [
    { side: ORDER_SIDE.BUY, type: "MARKET", size: 10, price: 100, instrumentid: 1 },
    { side: ORDER_SIDE.SELL, type: "MARKET", size: 5, price: 110, instrumentid: 1 },
    { side: ORDER_SIDE.CASH_IN, size: 1000 },
    { side: ORDER_SIDE.CASH_OUT, size: 200 },
  ];
  it("should calculate cash and shares correctly", () => {
    const result = calculateFundsAndShares(orders, 1);
    expect(result).toHaveProperty("cash");
    expect(result).toHaveProperty("shares");
    expect(typeof result.cash).toBe("number");
    expect(typeof result.shares).toBe("number");
  });
});

describe("validateFundsAndShares", () => {
  it("should throw if insufficient cash for BUY", () => {
    expect(() => validateFundsAndShares({ side: "BUY", finalSize: 10, execPrice: 100, cash: 500, shares: 10 })).toThrow("Insufficient cash");
  });
  it("should throw if insufficient shares for SELL", () => {
    expect(() => validateFundsAndShares({ side: "SELL", finalSize: 10, execPrice: 100, cash: 10000, shares: 5 })).toThrow("Insufficient shares");
  });
  it("should not throw for valid BUY", () => {
    expect(() => validateFundsAndShares({ side: "BUY", finalSize: 1, execPrice: 100, cash: 1000, shares: 10 })).not.toThrow();
  });
  it("should not throw for valid SELL", () => {
    expect(() => validateFundsAndShares({ side: "SELL", finalSize: 1, execPrice: 100, cash: 1000, shares: 10 })).not.toThrow();
  });
}); 