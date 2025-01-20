import DatabaseConnectionRepository, {
  TestConnectionOptions,
} from "@app/core/repository/database-connection.repository";

export default class DatabaseConnection {
  constructor(
    private readonly databaseConnection: DatabaseConnectionRepository,
  ) {}

  async authenticate(options: TestConnectionOptions) {
    return this.databaseConnection.testConnection(options);
  }

  close() {
    return this.databaseConnection.close();
  }
}
