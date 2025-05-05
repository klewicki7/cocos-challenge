import { Instrument } from "@/entities/instrument";
import {
  getInstrumentById as getInstrumentByIdRepository,
  searchInstruments as searchInstrumentsRepository,
  getAllInstruments as getAllInstrumentsRepository,
} from "@/repositories/instruments";

export const searchInstruments = async (
  query: string
): Promise<Instrument[]> => {
  return await searchInstrumentsRepository(query);
};

export const getInstrumentById = async (instrumentId: number) => {
  return await getInstrumentByIdRepository(instrumentId);
};

export const getAllInstruments = async (): Promise<Instrument[]> => {
  return await getAllInstrumentsRepository();
};
