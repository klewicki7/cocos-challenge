import { z } from "zod";

export const searchInstrumentsQuerySchema = z.object({
  query: z.string().min(1),
});
