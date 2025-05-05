import { z } from "zod";

export const userIdParamSchema = z.object({
  userId: z.string().regex(/^\d+$/).transform(Number),
});
