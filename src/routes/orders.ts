import { Router } from "express";
import { createOrder } from "@controllers/orders";

const router = Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Enviar una orden al mercado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               instrumentId:
 *                 type: integer
 *               side:
 *                 type: string
 *                 enum: [BUY, SELL, CASH_IN, CASH_OUT]
 *               type:
 *                 type: string
 *                 enum: [MARKET, LIMIT]
 *               size:
 *                 type: integer
 *                 description: Cantidad de acciones
 *               amount:
 *                 type: number
 *                 description: Monto en pesos
 *               price:
 *                 type: number
 *                 description: Solo para órdenes LIMIT
 *     responses:
 *       200:
 *         description: Orden creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 ...
 * /api/orders/{orderId}/cancel:
 *   post:
 *     summary: Cancelar una orden (solo si está en estado NEW)
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     responses:
 *       200:
 *         description: Orden cancelada
 */

router.post("/", createOrder);


export default router;
