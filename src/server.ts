import app from "./app";
import ENV from "./core/environment/environment";

import { databaseConnection } from "./db/dependencies";

import logger from "./core/utils/logger";
import applicationConfig from "./core/environment/application.config";

async function main() {
  if (applicationConfig.database.enableTryConnection) {
    await databaseConnection.authenticate({ maxRetries: 2, timeout: 2000 });
  } else {
    logger.info("Try database connection disabled");
  }

  app.listen(ENV.PORT, () => {
    logger.info(`The server has started in ${ENV.PORT}`);
  });
}

main();
