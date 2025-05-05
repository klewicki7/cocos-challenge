import { calculateCash, calculateShares } from "../functions";
import { ORDER_TYPES, ORDER_SIDE } from "../constants";
import { Order } from "@/entities/order";

/**
 * Unit tests for calculateCash and calculateShares functions.
 */
describe("functions utils", () => {
  describe("calculateCash", () => {
    it("should return 0 for empty orders", () => {
      // Arrange
      const inputOrders: Order[] = [];
      // Act
      const actualCash = calculateCash(inputOrders);
      // Assert
      expect(actualCash).toBe(0);
    });

    it("should sum CASH_IN and subtract CASH_OUT", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: null, side: ORDER_TYPES.CASH_IN, type: ORDER_TYPES.CASH_IN, size: 1000, price: null, status: null },
        { id: 2, userid: 1, instrumentid: null, side: ORDER_TYPES.CASH_OUT, type: ORDER_TYPES.CASH_OUT, size: 200, price: null, status: null },
      ];
      // Act
      const actualCash = calculateCash(inputOrders);
      // Assert
      expect(actualCash).toBe(800);
    });

    it("should handle BUY and SELL orders with price and size", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: 1, side: ORDER_SIDE.BUY, type: "MARKET", size: 10, price: 5, status: null },
        { id: 2, userid: 1, instrumentid: 1, side: ORDER_SIDE.SELL, type: "MARKET", size: 5, price: 10, status: null },
      ];
      // Act
      const actualCash = calculateCash(inputOrders);
      // Assert
      expect(actualCash).toBe(-10 * 5 + 5 * 10);
    });

    it("should ignore null or undefined size and price", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: 1, side: ORDER_SIDE.BUY, type: "MARKET", size: null, price: null, status: null },
        { id: 2, userid: 1, instrumentid: 1, side: ORDER_SIDE.SELL, type: "MARKET", size: null, price: null, status: null },
      ];
      // Act
      const actualCash = calculateCash(inputOrders);
      // Assert
      expect(actualCash).toBe(0);
    });
  });

  describe("calculateShares", () => {
    it("should return 0 for empty orders", () => {
      // Arrange
      const inputOrders: Order[] = [];
      // Act
      const actualShares = calculateShares(inputOrders, 1);
      // Assert
      expect(actualShares).toBe(0);
    });

    it("should sum BUY and subtract SELL for the given instrument", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: 1, side: ORDER_SIDE.BUY, type: "MARKET", size: 10, price: 5, status: null },
        { id: 2, userid: 1, instrumentid: 1, side: ORDER_SIDE.SELL, type: "MARKET", size: 4, price: 10, status: null },
        { id: 3, userid: 1, instrumentid: 2, side: ORDER_SIDE.BUY, type: "MARKET", size: 7, price: 8, status: null },
      ];
      // Act
      const actualShares = calculateShares(inputOrders, 1);
      // Assert
      expect(actualShares).toBe(6);
    });

    it("should ignore orders for other instruments", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: 2, side: ORDER_SIDE.BUY, type: "MARKET", size: 10, price: 5, status: null },
      ];
      // Act
      const actualShares = calculateShares(inputOrders, 1);
      // Assert
      expect(actualShares).toBe(0);
    });

    it("should ignore null or undefined size", () => {
      // Arrange
      const inputOrders: Order[] = [
        { id: 1, userid: 1, instrumentid: 1, side: ORDER_SIDE.BUY, type: "MARKET", size: null, price: 5, status: null },
        { id: 2, userid: 1, instrumentid: 1, side: ORDER_SIDE.SELL, type: "MARKET", size: null, price: 10, status: null },
      ];
      // Act
      const actualShares = calculateShares(inputOrders, 1);
      // Assert
      expect(actualShares).toBe(0);
    });
  });
}); 