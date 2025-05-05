import * as portfolioService from "../portfolio";
import * as portfolioRepo from "@/repositories/portfolio";
import * as instrumentsRepo from "@/repositories/instruments";
import * as marketdataRepo from "@/repositories/marketdata";
import * as portfolioUtils from "@utils/portfolio";
import { Portfolio } from "@entities/portfolio";

describe("getPortfolio", () => {
  const mockOrders = [
    { id: 1, userid: 1, instrumentid: 1, side: "BUY", type: "MARKET", size: 10, price: 100, status: "FILLED" },
    { id: 2, userid: 1, instrumentid: 1, side: "SELL", type: "MARKET", size: 5, price: 110, status: "FILLED" },
  ];
  const mockInstruments = [
    { id: 1, ticker: "AAPL", name: "Apple", type: "Stock" },
  ];
  const mockMarketData = [
    { instrumentid: 1, close: 100, previousclose: 90, date: new Date() },
  ];
  const mockPositions = [
    { instrumentId: 1, ticker: "AAPL", name: "Apple", type: "Stock", quantity: 5, marketValue: "1.000,00", performance: 10 },
  ];
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(portfolioRepo, "fetchFilledOrders").mockResolvedValue(mockOrders);
    jest.spyOn(portfolioUtils, "calculateCash").mockReturnValue(1000);
    jest.spyOn(portfolioUtils, "buildPositionsMap").mockReturnValue({ 1: { quantity: 5 } });
    jest.spyOn(instrumentsRepo, "getInstrumentsByIds").mockResolvedValue(mockInstruments);
    jest.spyOn(marketdataRepo, "getMarketDataByInstrumentsIds").mockResolvedValue(mockMarketData);
    jest.spyOn(portfolioUtils, "buildPortfolioPositions").mockReturnValue(mockPositions);
    jest.spyOn(portfolioUtils, "calculateTotalValue").mockReturnValue("2.000,00");
  });

  it("should return a portfolio object", async () => {
    const result = await portfolioService.getPortfolio(1);
    expect(result).toEqual({
      cash: "1.000,00",
      totalValue: "2.000,00",
      positions: mockPositions,
    });
  });

  it("should handle empty orders", async () => {
    jest.spyOn(portfolioRepo, "fetchFilledOrders").mockResolvedValue([]);
    jest.spyOn(portfolioUtils, "calculateCash").mockReturnValue(0);
    jest.spyOn(portfolioUtils, "buildPositionsMap").mockReturnValue({});
    jest.spyOn(instrumentsRepo, "getInstrumentsByIds").mockResolvedValue([]);
    jest.spyOn(marketdataRepo, "getMarketDataByInstrumentsIds").mockResolvedValue([]);
    jest.spyOn(portfolioUtils, "buildPortfolioPositions").mockReturnValue([]);
    jest.spyOn(portfolioUtils, "calculateTotalValue").mockReturnValue("0,00");
    const result = await portfolioService.getPortfolio(1);
    expect(result).toEqual({
      cash: "0,00",
      totalValue: "0,00",
      positions: [],
    });
  });
}); 