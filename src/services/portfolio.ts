import { Portfolio } from "@entities/portfolio";
import { fetchFilledOrders } from "@/repositories/portfolio";
import { getInstrumentsByIds } from "@/repositories/instruments";
import { getMarketDataByInstrumentsIds } from "@/repositories/marketdata";
import {
  calculateCash,
  buildPositionsMap,
  buildPortfolioPositions,
  calculateTotalValue,
} from "@utils/portfolio";
import { formatNumberToCurrency } from "@/utils/formatters";

export const getPortfolio = async (userId: number): Promise<Portfolio> => {
  const orders = await fetchFilledOrders(userId);
  const cash = calculateCash(orders);
  const positionsMap = buildPositionsMap(orders);
  const instrumentIds = Object.keys(positionsMap)
    .map(Number)
    .filter((id) => id);
  const instruments = await getInstrumentsByIds(instrumentIds);
  const marketData = await getMarketDataByInstrumentsIds(instrumentIds);
  const positions = buildPortfolioPositions({
    instruments,
    marketData,
    positionsMap,
  });
  const totalValue = calculateTotalValue(cash, positions);
  return {
    cash: formatNumberToCurrency(cash, {
      locale: "es-AR",
      currency: "ARS",
    }),
    totalValue,
    positions,
  };
};
