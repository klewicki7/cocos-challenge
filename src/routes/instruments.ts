import { Router } from "express";
import {
  getAllInstruments,
  searchInstruments,
} from "@/controllers/instruments";

const router = Router();

/**
 * @swagger
 * /api/instruments:
 *   get:
 *     summary: Get all available instruments
 *     responses:
 *       200:
 *         description: List of all instruments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   ticker:
 *                     type: string
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 */
router.get("/", (req, res) => getAllInstruments(req, res));

/**
 * @swagger
 * /api/instruments/search:
 *   get:
 *     summary: Buscar instrumentos por ticker o nombre
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Ticker o nombre a buscar
 *     responses:
 *       200:
 *         description: Listado de instrumentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   ticker:
 *                     type: string
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 */
router.get("/search", (req, res) => searchInstruments(req, res));

export default router;
