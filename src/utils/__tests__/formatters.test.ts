import { formatNumberToCurrency } from "../formatters";

describe("formatNumberToCurrency", () => {
  it("should format number as ARS currency in es-AR locale", () => {
    const actual = formatNumberToCurrency(1234.56, { locale: "es-AR", currency: "ARS" });
    expect(typeof actual).toBe("string");
    expect(actual).toContain("$");
  });

  it("should format number as USD currency in en-US locale", () => {
    const actual = formatNumberToCurrency(1234.56, { locale: "en-US", currency: "USD" });
    expect(typeof actual).toBe("string");
    expect(actual).toContain("$");
  });

  it("should format negative numbers correctly", () => {
    const actual = formatNumberToCurrency(-100, { locale: "en-US", currency: "USD" });
    expect(actual).toContain("-");
  });

  it("should format zero correctly", () => {
    const actual = formatNumberToCurrency(0, { locale: "en-US", currency: "USD" });
    expect(actual).toBe("$0.00");
  });

  it("should respect minimum and maximum fraction digits", () => {
    const actual = formatNumberToCurrency(1.2, { locale: "en-US", currency: "USD" });
    expect(actual).toBe("$1.20");
  });
}); 