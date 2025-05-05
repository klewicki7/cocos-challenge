import { createOrderSchema, userIdParamSchema, searchInstrumentsQuerySchema } from "../validation";

describe("createOrderSchema", () => {
  it("should validate a correct order", () => {
    const data = {
      userId: 1,
      instrumentId: 2,
      side: "BUY",
      type: "MARKET",
      size: 10,
      amount: 1000,
      price: 100,
    };
    expect(() => createOrderSchema.parse(data)).not.toThrow();
  });
  it("should fail for missing userId", () => {
    const data = { instrumentId: 2, side: "BUY", type: "MARKET" };
    expect(() => createOrderSchema.parse(data)).toThrow();
  });
  it("should fail for invalid side", () => {
    const data = { userId: 1, instrumentId: 2, side: "INVALID", type: "MARKET" };
    expect(() => createOrderSchema.parse(data)).toThrow();
  });
});

describe("userIdParamSchema", () => {
  it("should parse a valid userId string", () => {
    const data = { userId: "123" };
    const result = userIdParamSchema.parse(data);
    expect(result.userId).toBe(123);
  });
  it("should fail for non-numeric userId", () => {
    const data = { userId: "abc" };
    expect(() => userIdParamSchema.parse(data)).toThrow();
  });
});

describe("searchInstrumentsQuerySchema", () => {
  it("should validate a correct query", () => {
    const data = { query: "AAPL" };
    expect(() => searchInstrumentsQuerySchema.parse(data)).not.toThrow();
  });
  it("should fail for empty query", () => {
    const data = { query: "" };
    expect(() => searchInstrumentsQuerySchema.parse(data)).toThrow();
  });
}); 