import { MarketData } from "@entities/marketdata";
import { PrismaClient } from "@generated/prisma";

const prisma = new PrismaClient();

export const getMarketDataByInstrumentsIds = async (
  instrumentIds: number[]
): Promise<MarketData[]> => {
  const marketData = await prisma.marketdata.findMany({
    where: {
      instrumentid: { in: instrumentIds },
      date: { lte: new Date() },
    },
    orderBy: [{ date: "desc" }],
  });
  // Convert Decimal fields to number
  return marketData.map((md) => ({
    ...md,
    close:
      md.close !== null &&
      typeof md.close === "object" &&
      "toNumber" in md.close
        ? Number(md.close)
        : md.close,
    previousclose:
      md.previousclose !== null &&
      typeof md.previousclose === "object" &&
      "toNumber" in md.previousclose
        ? Number(md.previousclose)
        : md.previousclose,
  }));
};
