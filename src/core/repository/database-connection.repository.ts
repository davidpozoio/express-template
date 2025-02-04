import type { DatabaseQueryOptions } from "../types/database";
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
  query<T>(query: string, options?: DatabaseQueryOptions<T>): Promise<void>;
}
