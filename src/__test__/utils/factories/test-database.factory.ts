import PostgresTestContainer from "../repository/postgres-test-container";
import TestDatabaseContainerService from "../services/test-database-container.service";

export default class TestDatabaseFactory {
  private constructor() {}
  static create() {
    const testDatabaseContainer = new PostgresTestContainer();
    return new TestDatabaseContainerService(testDatabaseContainer);
  }
}
