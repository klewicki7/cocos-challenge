import { Request, Response } from "express";
import { PrismaClient } from "@generated/prisma";
import { searchInstrumentsQuerySchema } from "@utils/validation";

const prisma = new PrismaClient();

export const searchInstruments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { data, success, error } = searchInstrumentsQuerySchema.safeParse(
      req.query
    );

    if (!success) {
      res.status(400).json({
        error: "Missing or invalid query parameter",
        details: error?.errors,
      });
      return;
    }

    const { query } = data;

    const results = await prisma.instruments.findMany({
      where: {
        OR: [
          { ticker: { contains: query, mode: "insensitive" } },
          { name: { contains: query, mode: "insensitive" } },
        ],
      },
      take: 20,
      orderBy: { ticker: "asc" },
    });

    res.json(results);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error searching instruments", details: error });
  }
};
