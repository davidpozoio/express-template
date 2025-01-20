import SequelizeMother from "@app/core/config/sequelize-mother";
import DatabaseConnectionRepository, {
  TestConnectionOptions,
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
  testConnection(
    options: TestConnectionOptions = {
      maxRetries: 10,
      timeout: 5000,
      databaseMode: "normal",
    },
  ): Promise<void> {
    this.sequelize = SequelizeMother.create({ mode: options.databaseMode });

    return this.sequelize.authenticate({
      retry: { max: options.maxRetries, timeout: options.timeout },
    });
  }
  /**
   * closes all the current connections
   */
  async close(): Promise<void> {
    await this.sequelize?.close();
  }
}
