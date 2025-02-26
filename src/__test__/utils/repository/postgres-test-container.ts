import type { DatabaseConfig } from "@app/core/types/database";
import type { TestDatabaseContainer } from "../types/test-database-container";
import {
  PostgreSqlContainer,
  type StartedPostgreSqlContainer,
} from "@testcontainers/postgresql";
import DATABASE_ENV from "@app/core/environment/database.env";

export default class PostgresTestContainer implements TestDatabaseContainer {
  private container: PostgreSqlContainer;
  private startedContainer?: StartedPostgreSqlContainer;

  constructor() {
    this.container = new PostgreSqlContainer();
  }

  async getConfig(port?: number): Promise<Omit<DatabaseConfig, "client">> {
    return {
      host: this.startedContainer?.getHost() || DATABASE_ENV().HOST,
      name: this.startedContainer?.getDatabase() || DATABASE_ENV().NAME,
      password: this.startedContainer?.getPassword() || DATABASE_ENV().PASSWORD,
      port: this.startedContainer?.getMappedPort(5432) || DATABASE_ENV().PORT,
      user: this.startedContainer?.getUsername() || DATABASE_ENV().USER,
      url: `postgresql://${this.startedContainer?.getUsername() || DATABASE_ENV().USER}:${this.startedContainer?.getPassword() || DATABASE_ENV().PASSWORD}@${this.startedContainer?.getHost() || DATABASE_ENV().HOST}:${this.startedContainer?.getMappedPort(5432) || DATABASE_ENV().PORT}/${this.startedContainer?.getDatabase() || DATABASE_ENV().NAME}`,
    };
  }

  async getConnectionUri(): Promise<string> {
    return this.startedContainer?.getConnectionUri() || "";
  }
  async start(): Promise<void> {
    this.startedContainer = await this.container.start();
  }
  async stop(): Promise<void> {
    await this.startedContainer?.stop();
  }
}
