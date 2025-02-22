import DatabaseConnectionRepository, {
  DatabaseConnectionOptions,
} from "@app/core/repository/database-connection.repository";
import { DatabaseQueryOptions } from "@app/core/types/database";
import logger from "@app/core/utils/logger";
import { Sequelize } from "sequelize";

export default class SequelizeConnectionRepository
  implements DatabaseConnectionRepository
{
  sequelize: Sequelize | null = null;
  /**
   *
   * @param options options for configuration
   * @returns
   */
  async testConnection(
    options: DatabaseConnectionOptions = {
      maxRetries: 10,
      timeout: 5000,
      databaseMode: "normal",
      logging: false,
    },
  ): Promise<void> {
    await this.sequelize?.authenticate({
      retry: { max: options.maxRetries, timeout: options.timeout },
    });
  }
  /**
   * closes all the current connections
   */
  async close(): Promise<void> {
    await this.sequelize?.close();
  }

  async query<T>(
    query: string,
    options: DatabaseQueryOptions<T>,
  ): Promise<void> {
    await this.sequelize
      ?.query(query, {
        replacements: { ...options?.replacements },
      })
      ?.catch((err) => {
        logger.error(err);
      });
  }
}
