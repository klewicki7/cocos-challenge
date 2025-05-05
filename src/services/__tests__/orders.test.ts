import { createOrder } from "../orders";
import * as orderUtils from "@utils/order";
import * as orderRepo from "@/repositories/order";
import * as instrumentRepo from "@/repositories/instruments";
import * as marketdataRepo from "@/repositories/marketdata";
import { ORDER_STATUS, ORDER_SIDE, ORDER_TYPE } from "@utils/constants";
import { CreateOrder } from "@entities/order";
import { Instrument } from "@entities/instrument";

// Mocks
jest.mock("@/repositories/order");
jest.mock("@/repositories/instruments");
jest.mock("@/repositories/marketdata");

const mockInstrument: Instrument = {
  id: 1,
  ticker: "AAPL",
  name: "Apple",
  type: "Stock",
};

const mockFilledOrders = [
  {
    side: ORDER_SIDE.BUY,
    type: ORDER_TYPE.MARKET,
    size: 10,
    price: 100,
    instrumentid: 1,
  },
  {
    side: ORDER_SIDE.SELL,
    type: ORDER_TYPE.MARKET,
    size: 5,
    price: 110,
    instrumentid: 1,
  },
];

describe("createOrder", () => {
  const input: CreateOrder = {
    userId: 1,
    instrumentId: 1,
    side: "BUY",
    type: "MARKET",
    size: 5,
    price: 100,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (instrumentRepo.getInstrumentById as jest.Mock).mockResolvedValue(
      mockInstrument
    );
    (marketdataRepo.getExecutionPrice as jest.Mock).mockResolvedValue(100);
    (orderRepo.getUserOrdersByStatus as jest.Mock).mockResolvedValue(
      mockFilledOrders
    );
    (orderRepo.createOrder as jest.Mock).mockResolvedValue({ id: 1, ...input });
    jest
      .spyOn(orderUtils, "calculateFundsAndShares")
      .mockReturnValue({ cash: 10000, shares: 100 });
  });

  it("should create an order successfully", async () => {
    const result = await createOrder(input);
    expect(instrumentRepo.getInstrumentById).toHaveBeenCalledWith(
      input.instrumentId
    );
    expect(marketdataRepo.getExecutionPrice).toHaveBeenCalledWith(
      input.type,
      input.price,
      input.instrumentId
    );
    expect(orderRepo.getUserOrdersByStatus).toHaveBeenCalledWith(
      input.userId,
      ORDER_STATUS.FILLED
    );
    expect(orderRepo.createOrder).toHaveBeenCalled();
    expect(result).toHaveProperty("id");
  });

  it("should throw if instrument not found", async () => {
    (instrumentRepo.getInstrumentById as jest.Mock).mockResolvedValue(null);
    await expect(createOrder(input)).rejects.toThrow("Instrument not found");
  });

  it("should throw if insufficient cash for BUY", async () => {
    jest
      .spyOn(orderUtils, "calculateFundsAndShares")
      .mockReturnValue({ cash: 0, shares: 100 });
    await expect(createOrder(input)).rejects.toThrow("Insufficient funds");
  });

  it("should throw if insufficient shares for SELL", async () => {
    const sellInput = { ...input, side: "SELL" as const };
    jest
      .spyOn(orderUtils, "calculateFundsAndShares")
      .mockReturnValue({ cash: 10000, shares: 0 });
    await expect(createOrder(sellInput)).rejects.toThrow("Insufficient shares");
  });
});
