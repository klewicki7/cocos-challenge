import { Instrument } from "@entities/instrument";
import { PrismaClient } from "@generated/prisma";

const prisma = new PrismaClient();

export const getInstrumentsByIds = async (
  instrumentIds: number[]
): Promise<Instrument[]> => {
  return prisma.instruments.findMany({ where: { id: { in: instrumentIds } } });
};
