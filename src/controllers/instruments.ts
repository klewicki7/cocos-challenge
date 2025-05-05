import { Request, Response } from "express";
import { searchInstrumentsQuerySchema } from "@utils/validation";
import {
  searchInstruments as searchInstrumentsService,
  getAllInstruments as getAllInstrumentsService,
} from "@services/instruments";

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

    const results = await searchInstrumentsService(query);

    res.json(results);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error searching instruments", details: error });
  }
};

export const getAllInstruments = async (
  req: Request,
  res: Response
): Promise<void> => {
  const instruments = await getAllInstrumentsService();
  res.json(instruments);
};
