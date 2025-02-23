import type { TestDatabaseContainer } from "../types/test-database-container";

export default class TestDatabaseContainerService {
  constructor(private readonly testDatabaseContainer: TestDatabaseContainer) {}

  start() {
    return this.testDatabaseContainer.start();
  }

  getConfig() {
    return this.testDatabaseContainer.getConfig();
  }

  stop() {
    return this.testDatabaseContainer.stop();
  }
}
