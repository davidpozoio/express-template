import SequelizeMother from "@app/core/config/sequelize-mother";
import DatabaseConnectionRepository, {
  DatabaseConnectionOptions,
} from "@app/core/repository/database-connection.repository";
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
    this.sequelize = SequelizeMother.create({
      mode: options.databaseMode,
      logging: options.logging,
    });

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

  async query(query: string): Promise<void> {
    await this.sequelize?.query(query);
  }
}
