import { Router } from "express";
import { createOrder } from "@controllers/orders";

const router = Router();


/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instrumentId:
 *                 type: integer
 *                 description: ID of the instrument to trade
 *               quantity:
 *                 type: integer
 *                 description: Number of units to trade
 *               type:
 *                 type: string
 *                 enum: [BUY, SELL]
 *                 description: Type of order
 *             required:
 *               - instrumentId
 *               - quantity 
 *               - type
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 instrumentId:
 *                   type: integer
 *                 quantity:
 *                   type: integer
 *                 type:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
router.post("/", createOrder);


export default router;
