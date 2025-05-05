import { formatNumberToCurrency } from "../formatters";

describe("formatNumberToCurrency", () => {
  it("should format number as currency for es-AR", () => {
    const result = formatNumberToCurrency(123456.78, { locale: "es-AR", currency: "ARS" });
    expect(result).toBe("123.456,78");
  });

  it("should format number as currency for en-US", () => {
    const result = formatNumberToCurrency(123456.78, { locale: "en-US", currency: "USD" });
    expect(result).toBe("123,456.78");
  });

  it("should handle zero", () => {
    const result = formatNumberToCurrency(0, { locale: "es-AR", currency: "ARS" });
    expect(result).toBe("0,00");
  });

  it("should handle negative numbers", () => {
    const result = formatNumberToCurrency(-1000, { locale: "es-AR", currency: "ARS" });
    expect(result).toBe("-1.000,00");
  });
}); 