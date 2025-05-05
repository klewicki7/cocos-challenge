import { z } from "zod";

export const createOrderSchema = z.object({
  userId: z
    .number({
      required_error: "User ID is required",
      invalid_type_error: "User ID must be a valid number",
    })
    .int({
      message: "User ID must be an integer",
    }),
  instrumentId: z
    .number({
      required_error: "Instrument ID is required",
      invalid_type_error: "Instrument ID must be a valid number",
    })
    .int({
      message: "Instrument ID must be an integer",
    }),
  side: z.enum(["BUY", "SELL", "CASH_IN", "CASH_OUT"], {
    required_error: "Order side is required",
    invalid_type_error:
      "Invalid order side. Must be one of: BUY, SELL, CASH_IN, CASH_OUT",
  }),
  type: z.enum(["MARKET", "LIMIT"], {
    required_error: "Order type is required",
    invalid_type_error: "Invalid order type. Must be either MARKET or LIMIT",
  }),
  size: z
    .number({
      invalid_type_error: "Size must be a valid number when provided",
    })
    .int({
      message: "Size must be an integer when provided",
    })
    .optional(),
  amount: z
    .number({
      invalid_type_error: "Amount must be a valid number when provided",
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: "Price must be a valid number when provided",
    })
    .optional(),
});
