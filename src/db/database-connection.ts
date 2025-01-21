import DatabaseConnectionRepository, {
  DatabaseConnectionOptions,
} from "@app/core/repository/database-connection.repository";

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
  query(query: string) {
    return this.databaseConnection.query(query);
  }
}
