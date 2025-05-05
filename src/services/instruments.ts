import { Instrument } from "@/entities/instrument";
import {
  getInstrumentById as getInstrumentByIdRepository,
  searchInstruments as searchInstrumentsRepository,
} from "@repository/instruments";

export const searchInstruments = async (
  query: string
): Promise<Instrument[]> => {
  return await searchInstrumentsRepository(query);
};

export const getInstrumentById = async (instrumentId: number) => {
  return await getInstrumentByIdRepository(instrumentId);
};
