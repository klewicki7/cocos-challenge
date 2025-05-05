import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import express from "express";

const swaggerRoutes = express.Router();
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Cocos Challenge API",
    version: "1.0.0",
    description: "API para portfolio, búsqueda de activos y órdenes",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

swaggerRoutes.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default swaggerRoutes;
