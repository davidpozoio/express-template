import https, { type ServerOptions } from "node:https";
import express from "express";
import app from "./app";
import ENV from "./core/environment/environment";
import { readFileSync } from "node:fs";
import redirectHttpToHttps from "./core/middleware/redirect-http-to-https";
import { databaseConnection } from "./db/dependencies";
import { DATABASE_MODE } from "./core/environment/database.env";
import logger from "./core/utils/logger";

databaseConnection
  .authenticate({ databaseMode: "normal", maxRetries: 10, timeout: 5000 })
  .catch(() => {
    logger.info("trying to connect to the database...");
  })
  .then(() => {
    logger.info("database connected!", `Database mode: ${DATABASE_MODE}`);

    /// cert options
    const options: ServerOptions = {
      cert: readFileSync(ENV.CERT_SSL_PATH || "", "utf-8"),
      key: readFileSync(ENV.KEY_SSL_PATH || "", "utf-8"),
    };

    const server = https.createServer(options, app);

    server.listen(ENV.HTTPS_PORT, () => {
      logger.info(`https server has started in port ${ENV.HTTPS_PORT}`);
    });

    if (ENV.HTTPS_REDIRECT) {
      const httpServer = express();
      httpServer.get("*", redirectHttpToHttps);
      httpServer.listen(ENV.PORT, () => {
        logger.info(`the server has started in ${ENV.PORT}`);
      });
      return;
    }

    app.listen(ENV.PORT, () => {
      logger.info(`the server has started in ${ENV.PORT}`);
    });
  });
