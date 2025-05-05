import { z } from 'zod';

export const createOrderSchema = z.object({
  userId: z.number().int(),
  instrumentId: z.number().int(),
  side: z.enum(['BUY', 'SELL', 'CASH_IN', 'CASH_OUT']),
  type: z.enum(['MARKET', 'LIMIT']),
  size: z.number().int().optional(),
  amount: z.number().optional(),
  price: z.number().optional(),
});

export const userIdParamSchema = z.object({
  userId: z.string().regex(/^\d+$/).transform(Number),
});

export const searchInstrumentsQuerySchema = z.object({
  query: z.string().min(1),
}); 