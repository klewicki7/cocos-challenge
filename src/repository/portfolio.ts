import { Order } from "@entities/order";
import { PrismaClient } from "@generated/prisma";


const prisma = new PrismaClient();

export const fetchFilledOrders = async (userId: number): Promise<Order[]> => {
  const orders = await prisma.orders.findMany({
    where: { userid: userId, status: "FILLED" },
  });
  // Convert Decimal fields to number
  return orders.map((order) => ({
    ...order,
    price:
      order.price !== null &&
      typeof order.price === "object" &&
      "toNumber" in order.price
        ? Number(order.price)
        : order.price,
    size:
      order.size !== null &&
      typeof order.size === "object" &&
      "toNumber" in order.size
        ? Number(order.size)
        : order.size,
  }));
};
