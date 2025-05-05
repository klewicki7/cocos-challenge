import { createLogger, format, transports, Logger } from "winston";
import fs from "fs";
import path from "path";
const isTest = process.env.NODE_ENV === "test";

/**
 * Application logger using Winston.
 * Provides logging capabilities for all API flows.
 *
 * @example
 * logger.info('This is an info message');
 * logger.error('This is an error message');
 */
// Ensure logs directory exists
const logsDir = path.resolve(__dirname, "../../logs");
if (!isTest && !fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logger: Logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: !isTest
    ? [
        new transports.Console(),
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" }),
      ]
    : [new transports.Console()],
});

export default logger;
