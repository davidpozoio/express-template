import sequelize from "@app/core/config/sequelize.config";
import databaseConfig from "@app/core/environment/database.config";
import DatabaseConnectionRepository, {
  DatabaseConnectionOptions,
} from "@app/core/repository/database-connection.repository";
import delay from "@app/core/utils/delay";
import logger from "@app/core/utils/logger";

export default class SequelizeConnectionRepository
  implements DatabaseConnectionRepository
{
  /**
   *
   * @param options options for configuration
   * @returns
   */
  async testConnection(
    options: DatabaseConnectionOptions = {
      maxRetries: 10,
      timeout: 5000,

      logging: false,
    },
  ): Promise<void> {
    let tries = 0;
    while (true) {
      if (tries === options.maxRetries) {
        logger.error("Error to connect to the database");
        break;
      }

      try {
        logger.info(
          `Trying to connect to "${databaseConfig.config.use}" database`,
        );
        await delay(options.timeout);
        await sequelize().query("SELECT 1");
        break;
      } catch (error) {
        tries++;
      }
    }
  }
}
