import { z } from "zod";

export const createOrderSchema = z.object({
  userId: z.number().int({
    message: "User ID must be an integer",
  }),
  instrumentId: z.number().int({
    message: "Instrument ID must be an integer",
  }),
  side: z.enum(["BUY", "SELL", "CASH_IN", "CASH_OUT"], {
    errorMap: () => ({
      message: "Side must be one of: BUY, SELL, CASH_IN, CASH_OUT",
    }),
  }),
  type: z.enum(["MARKET", "LIMIT"], {
    errorMap: () => ({ message: "Order type must be either MARKET or LIMIT" }),
  }),
  size: z
    .number()
    .int({
      message: "Size must be an integer",
    })
    .optional(),
  amount: z
    .number({
      invalid_type_error: "Amount must be a number",
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: "Price must be a number",
    })
    .optional(),
});

export const userIdParamSchema = z.object({
  userId: z
    .string()
    .regex(/^\d+$/, { message: "User ID must contain only digits" })
    .transform(Number),
});

export const searchInstrumentsQuerySchema = z.object({
  query: z.string().min(1, { message: "Search query must not be empty" }),
});
