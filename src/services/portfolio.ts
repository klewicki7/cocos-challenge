import { Portfolio, PortfolioPosition } from "@entities/portfolio";
import { fetchFilledOrders } from "@/repositories/portfolio";
import { getInstrumentsByIds } from "@/repositories/instruments";
import { getMarketDataByInstrumentsIds } from "@/repositories/marketdata";
import {
  buildPositionsMap,
  buildPortfolioPositions,
  calculateTotalValue,
} from "@utils/portfolio";
import { formatNumberToCurrency } from "@/utils/formatters";
import { calculateCash } from "@/utils/functions";
import { Order } from "@/entities/order";
import logger from "@utils/logger";

export const getPositions = async (
  orders: Order[]
): Promise<PortfolioPosition[]> => {
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

  return positions;
};

export const getPortfolio = async (userId: number): Promise<Portfolio> => {
  logger.info("[PortfolioService] Start getPortfolio");
  try {
    const orders = await fetchFilledOrders(userId);
    const cash = calculateCash(orders);
    const positions = await getPositions(orders);
    const totalValue = calculateTotalValue(cash, positions);

    return {
      cash: formatNumberToCurrency(cash, {
        locale: "es-AR",
        currency: "ARS",
      }),
      positions: positions.map(({ marketValue, ...rest }) => ({
        ...rest,
        marketValue: formatNumberToCurrency(Number(marketValue), {
          locale: "es-AR",
          currency: "ARS",
        }),
      })),
      totalValue,
    };
  } catch (err) {
    logger.error(`[PortfolioService] Error in getPortfolio: ${err}`);
    throw err;
  }
};
