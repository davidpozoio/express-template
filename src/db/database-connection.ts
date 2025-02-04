import DatabaseConnectionRepository, {
  DatabaseConnectionOptions,
} from "@app/core/repository/database-connection.repository";
import { DatabaseQueryOptions } from "@app/core/types/database";

export default class DatabaseConnection {
  constructor(
    private readonly databaseConnection: DatabaseConnectionRepository,
  ) {}

  async authenticate(options: DatabaseConnectionOptions) {
    return this.databaseConnection.testConnection(options);
  }

  close() {
    return this.databaseConnection.close();
  }
  query<T>(query: string, options?: DatabaseQueryOptions<T>) {
    return this.databaseConnection.query(query, options);
  }
}
