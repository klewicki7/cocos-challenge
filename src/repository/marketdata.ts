import { ORDER_TYPE } from "@/utils/constants";
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

export const getExecutionPrice = async (
  type: "MARKET" | "LIMIT",
  price: number | undefined,
  instrumentId: number
): Promise<number | undefined> => {
  if (type === ORDER_TYPE.MARKET) {
    const md = await prisma.marketdata.findFirst({
      where: { instrumentid: instrumentId },
      orderBy: { date: "desc" },
    });
    if (!md || !md.close) throw new Error("No market price available");
    return Number(md.close);
  }
  return price;
};
