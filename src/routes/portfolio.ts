import { Router } from "express";
import { getPortfolio } from "@/controllers/portfolio";

const router = Router();

/**
 * @swagger
 * /api/portfolio/{userId}:
 *   get:
 *     summary: Obtener el portfolio de un usuario
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Portfolio del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cash:
 *                   type: number
 *                 totalValue:
 *                   type: number
 *                 positions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       instrumentId:
 *                         type: integer
 *                       ticker:
 *                         type: string
 *                       name:
 *                         type: string
 *                       type:
 *                         type: string
 *                       quantity:
 *                         type: number
 *                       marketValue:
 *                         type: number
 *                       performance:
 *                         type: number
 */
router.get("/:userId", getPortfolio);

export default router;
