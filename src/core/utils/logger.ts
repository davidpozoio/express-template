import winston from "winston";
import ENV from "../environment/environment";

const logger = winston.createLogger({
  level: ENV.MODE === "dev" ? "debug" : "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/general/general.log" }),
    new winston.transports.File({
      level: "error",
      filename: "logs/error/error.log",
    }),
  ],
});

export default logger;
