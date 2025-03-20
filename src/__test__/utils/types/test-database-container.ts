import type { DatabaseConfig } from "@app/core/types/database";

export type TestDatabaseConfig = Omit<DatabaseConfig, "client">;

export interface TestDatabaseContainer {
  stop(): Promise<void>;
  start(): Promise<void>;
  getConnectionUri(): Promise<string>;
  getConfig(port?: number): Promise<TestDatabaseConfig>;
}
