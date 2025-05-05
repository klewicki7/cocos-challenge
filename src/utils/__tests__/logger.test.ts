import logger from "../logger";

describe("logger", () => {
  it("should have info, error, and warn methods", () => {
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.error).toBe("function");
    expect(typeof logger.warn).toBe("function");
  });

  it("should not throw when calling info, error, and warn", () => {
    expect(() => logger.info("test info message")).not.toThrow();
    expect(() => logger.error("test error message")).not.toThrow();
    expect(() => logger.warn("test warn message")).not.toThrow();
  });
}); 