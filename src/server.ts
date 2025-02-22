import app from "./app";
import ENV from "./core/environment/environment";

import { databaseConnection } from "./db/dependencies";

import logger from "./core/utils/logger";
import databaseConfig from "./core/environment/database.config";

databaseConnection
  .authenticate({ databaseMode: "normal", maxRetries: 10, timeout: 5000 })
  .catch(() => {
    logger.info("trying to connect to the database...");
  })
  .then(() => {
    logger.info(
      `Database connected! Database mode: ${databaseConfig.config.use}`,
    );

    app.listen(ENV.PORT, () => {
      logger.info(`The server has started in ${ENV.PORT}`);
    });
  });
