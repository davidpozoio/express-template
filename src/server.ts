import app from "./app";
import ENV from "./core/environment/environment";

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

    app.listen(ENV.PORT, () => {
      logger.info(`the server has started in ${ENV.PORT}`);
    });
  });
