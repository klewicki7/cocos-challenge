import { Request, Response } from "express";
import { searchInstrumentsQuerySchema } from "@utils/validation";
import {
  searchInstruments as searchInstrumentsService,
  getAllInstruments as getAllInstrumentsService,
} from "@services/instruments";
import logger from "@utils/logger";

export const searchInstruments = async (
  req: Request,
  res: Response
): Promise<void> => {
  logger.info("[InstrumentsController] Start searchInstruments");
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
    logger.info("[InstrumentsController] Success searchInstruments");
  } catch (error) {
    logger.error(
      `[InstrumentsController] Error in searchInstruments: ${error}`
    );
    res
      .status(500)
      .json({ error: "Error searching instruments", details: error });
  }
};

export const getAllInstruments = async (
  req: Request,
  res: Response
): Promise<void> => {
  logger.info("[InstrumentsController] Start getAllInstruments");
  try {
    const instruments = await getAllInstrumentsService();
    res.json(instruments);
    logger.info("[InstrumentsController] Success getAllInstruments");
  } catch (error) {
    logger.error(
      `[InstrumentsController] Error in getAllInstruments: ${error}`
    );
    res.status(500).json({ error: "Error fetching instruments" });
  }
};
