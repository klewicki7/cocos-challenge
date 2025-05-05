import * as instrumentsService from "../instruments";
import * as instrumentsRepo from "@/repositories/instruments";
import { Instrument } from "@/entities/instrument";

describe("instrumentsService", () => {
  const mockInstrument: Instrument = {
    id: 1,
    ticker: "AAPL",
    name: "Apple",
    type: "Stock",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("searchInstruments should return instruments", async () => {
    jest
      .spyOn(instrumentsRepo, "searchInstruments")
      .mockResolvedValue([mockInstrument]);
    const result = await instrumentsService.searchInstruments("AAPL");
    expect(result).toEqual([mockInstrument]);
    expect(instrumentsRepo.searchInstruments).toHaveBeenCalledWith("AAPL");
  });

  it("getInstrumentById should return instrument", async () => {
    jest
      .spyOn(instrumentsRepo, "getInstrumentById")
      .mockResolvedValue(mockInstrument);
    const result = await instrumentsService.getInstrumentById(1);
    expect(result).toEqual(mockInstrument);
    expect(instrumentsRepo.getInstrumentById).toHaveBeenCalledWith(1);
  });

  it("getAllInstruments should return all instruments", async () => {
    jest
      .spyOn(instrumentsRepo, "getAllInstruments")
      .mockResolvedValue([mockInstrument]);
    const result = await instrumentsService.getAllInstruments();
    expect(result).toEqual([mockInstrument]);
    expect(instrumentsRepo.getAllInstruments).toHaveBeenCalled();
  });
});
