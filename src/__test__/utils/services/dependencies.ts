import PostgresTestContainer from "../repository/postgres-test-container";
import TestDatabaseContainerService from "./test-database-container.service";

const testDatabaseContainer = new PostgresTestContainer();

const testDatabaseService = new TestDatabaseContainerService(
  testDatabaseContainer,
);

export { testDatabaseService };
