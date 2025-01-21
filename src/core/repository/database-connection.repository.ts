import type { DatabaseMode } from "../types/environment";

export interface TestConnectionOptions {
  timeout: number;
  maxRetries: number;
}

export interface CreationOptions {
  logging?: boolean;
  databaseMode: DatabaseMode;
}

export interface DatabaseConnectionOptions
  extends TestConnectionOptions,
    CreationOptions {}

export default interface DatabaseConnectionRepository {
  testConnection(options: DatabaseConnectionOptions): Promise<void>;
  close(): Promise<void>;
  query(query: string): Promise<void>;
}
