import dotenv from "dotenv";
import express from "express";
import logger from "@utils/logger";

import swaggerRoutes from "@routes/swagger";
import portfolioRoutes from "@routes/portfolio";
import instrumentsRoutes from "@routes/instruments";
import ordersRoutes from "@routes/orders";

dotenv.config();

const startServer = async (): Promise<void> => {
  try {

    const app = express();
    app.use(express.json());

    app.use("/api/docs", swaggerRoutes);
    app.use("/api/portfolio", portfolioRoutes);
    app.use("/api/instruments", instrumentsRoutes);
    app.use("/api/orders", ordersRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info(`Swagger docs at http://localhost:${PORT}/api/docs`);
    });
  } catch (error) {
    logger.error(`Failed to start server: ${error}`);
    process.exit(1);
  }
};

startServer();
