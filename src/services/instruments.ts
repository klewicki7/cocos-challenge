import { PrismaClient, instruments } from '@generated/prisma';


export default class InstrumentsService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  async searchInstruments(query: string): Promise<instruments[]> {
    return this.prisma.instruments.findMany({
      where: {
        OR: [
          { ticker: { contains: query, mode: 'insensitive' } },
          { name: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 20,
      orderBy: { ticker: 'asc' },
    });
  }
} 