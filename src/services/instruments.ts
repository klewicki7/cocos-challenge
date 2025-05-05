import { Instrument } from "@/entities/instrument";
import {
  getInstrumentById as getInstrumentByIdRepository,
  searchInstruments as searchInstrumentsRepository,
  getAllInstruments as getAllInstrumentsRepository,
} from "@/repositories/instruments";
import logger from "@utils/logger";

export const searchInstruments = async (
  query: string
): Promise<Instrument[]> => {
  return await searchInstrumentsRepository(query);
};

export const getInstrumentById = async (instrumentId: number) => {
  logger.info("[InstrumentsService] Start getInstrumentById");
  try {
    return await getInstrumentByIdRepository(instrumentId);
  } catch (err) {
    logger.error(`[InstrumentsService] Error in getInstrumentById: ${err}`);
    throw err;
  }
};

export const getAllInstruments = async (): Promise<Instrument[]> => {
  logger.info("[InstrumentsService] Start getAllInstruments");
  try {
    return await getAllInstrumentsRepository();
  } catch (err) {
    logger.error(`[InstrumentsService] Error in getAllInstruments: ${err}`);
    throw err;
  }
};
