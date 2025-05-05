import { Instrument } from "@entities/instrument";
import { PrismaClient } from "@generated/prisma";

const prisma = new PrismaClient();

export const getInstrumentsByIds = async (
  instrumentIds: number[]
): Promise<Instrument[]> => {
  return prisma.instruments.findMany({ where: { id: { in: instrumentIds } } });
};

export const getInstrumentById = async (
  instrumentId: number
): Promise<Instrument | null> => {
  return prisma.instruments.findUnique({ where: { id: instrumentId } });
};

export const searchInstruments = async (
  query: string
): Promise<Instrument[]> => {
  return prisma.instruments.findMany({
    where: {
      OR: [
        { ticker: { contains: query, mode: "insensitive" } },
        { name: { contains: query, mode: "insensitive" } },
      ],
    },
    take: 20,
    orderBy: { ticker: "asc" },
  });
};

export const getAllInstruments = async (): Promise<Instrument[]> => {
  return prisma.instruments.findMany();
};
