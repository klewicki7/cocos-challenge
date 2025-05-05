import { Request, Response } from "express";
import { getPortfolio as getPortfolioService } from "@/services/portfolio";
import { userIdParamSchema } from "@schemas/user";
import logger from "@utils/logger";

export const getPortfolio = async (req: Request, res: Response) => {
  logger.info("[PortfolioController] Start getPortfolio");
  try {
    const { success, data, error } = userIdParamSchema.safeParse(req.params);

    if (!success) {
      res.status(400).json({ error: "Invalid userId", details: error.errors });
      return;
    }
    
    const userId = data.userId;
    const portfolio = await getPortfolioService(userId);
    res.json(portfolio);
    logger.info("[PortfolioController] Success getPortfolio");
  } catch (error) {
    logger.error(`[PortfolioController] Error in getPortfolio: ${error}`);
    res.status(500).json({ error: "Error fetching portfolio", details: error });
  }
};
