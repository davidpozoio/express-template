import type { DatabaseConfig } from "@app/core/types/database";

export interface TestDatabaseContainer {
  stop(): Promise<void>;
  start(): Promise<void>;
  getConnectionUri(): Promise<string>;
  getConfig(port?: number): Promise<Omit<DatabaseConfig, "client">>;
}
