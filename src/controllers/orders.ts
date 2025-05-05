import { Request, Response } from "express";
import { createOrder as createOrderService } from "@services/orders";
import { createOrderSchema } from "@utils/validation";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { data, success, error } = createOrderSchema.safeParse(req.body);
    if (!success) {
      res.status(400).json({ error: "Invalid input", details: error?.errors });
      return;
    }
    const order = await createOrderService(data);
    res.json(order);
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : "Error creating order",
    });
  }
};
