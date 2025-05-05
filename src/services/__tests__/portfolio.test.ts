import * as portfolioService from "../portfolio";
import * as portfolioRepo from "@/repositories/portfolio";
import * as instrumentsRepo from "@/repositories/instruments";
import * as marketdataRepo from "@/repositories/marketdata";
import * as utilsPortfolio from "@utils/portfolio";
import * as utilsFunctions from "@utils/functions";
import * as utilsFormatters from "@utils/formatters";
import logger from "@utils/logger";

jest.mock("@/repositories/portfolio");
jest.mock("@/repositories/instruments");
jest.mock("@/repositories/marketdata");

const mockOrders = [
  { id: 1, instrumentid: 1, side: "BUY", type: "MARKET", size: 10, price: 100, status: "FILLED" },
  { id: 2, instrumentid: 1, side: "SELL", type: "MARKET", size: 5, price: 110, status: "FILLED" },
];
const mockPositionsMap = { 1: { quantity: 5 } };
const mockInstruments = [
  { id: 1, ticker: "AAPL", name: "Apple", type: "Stock" },
];
const mockMarketData = [
  { instrumentid: 1, close: 100, previousclose: 90 },
];
const mockPositions = [
  { instrumentId: 1, ticker: "AAPL", name: "Apple", type: "Stock", quantity: 5, marketValue: 500, performance: 10 },
];

describe("portfolioService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(utilsPortfolio, "buildPositionsMap").mockReturnValue(mockPositionsMap);
    jest.spyOn(utilsPortfolio, "buildPortfolioPositions").mockReturnValue(mockPositions as any);
    jest.spyOn(utilsPortfolio, "calculateTotalValue").mockReturnValue("$1,000.00");
    jest.spyOn(utilsFunctions, "calculateCash").mockReturnValue(1000);
    jest.spyOn(utilsFormatters, "formatNumberToCurrency").mockImplementation((n) => `$${n}`);
  });

  describe("getPositions", () => {
    it("should return portfolio positions", async () => {
      (instrumentsRepo.getInstrumentsByIds as jest.Mock).mockResolvedValue(mockInstruments);
      (marketdataRepo.getMarketDataByInstrumentsIds as jest.Mock).mockResolvedValue(mockMarketData);
      const result = await portfolioService.getPositions(mockOrders as any);
      expect(result).toEqual(mockPositions);
      expect(instrumentsRepo.getInstrumentsByIds).toHaveBeenCalledWith([1]);
      expect(marketdataRepo.getMarketDataByInstrumentsIds).toHaveBeenCalledWith([1]);
    });
  });

  describe("getPortfolio", () => {
    it("should return formatted portfolio", async () => {
      (portfolioRepo.fetchFilledOrders as jest.Mock).mockResolvedValue(mockOrders);
      jest.spyOn(portfolioService, "getPositions").mockResolvedValue(mockPositions as any);
      const result = await portfolioService.getPortfolio(1);
      expect(result).toHaveProperty("cash", "$1000");
      expect(result).toHaveProperty("positions");
      expect(result).toHaveProperty("totalValue", "$1,000.00");
      expect(portfolioRepo.fetchFilledOrders).toHaveBeenCalledWith(1);
      expect(portfolioService.getPositions).toHaveBeenCalledWith(mockOrders);
    });

    it("should log and throw on error", async () => {
      (portfolioRepo.fetchFilledOrders as jest.Mock).mockRejectedValue(new Error("fail"));
      const loggerErrorSpy = jest.spyOn(logger, "error").mockImplementation();
      await expect(portfolioService.getPortfolio(1)).rejects.toThrow("fail");
      expect(loggerErrorSpy).toHaveBeenCalled();
    });
  });
}); 