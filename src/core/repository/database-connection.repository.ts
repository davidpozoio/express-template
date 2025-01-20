import type { DatabaseMode } from "../types/environment";

export interface TestConnectionOptions {
  timeout: number;
  maxRetries: number;
  databaseMode: DatabaseMode;
}

export default interface DatabaseConnectionRepository {
  testConnection(options: TestConnectionOptions): Promise<void>;
  close(): Promise<void>;
}
