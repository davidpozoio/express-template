export interface TestConnectionOptions {
  timeout: number;
  maxRetries: number;
}

export interface CreationOptions {
  logging?: boolean;
}

export interface DatabaseConnectionOptions
  extends TestConnectionOptions,
    CreationOptions {}

export default interface DatabaseConnectionRepository {
  testConnection(options: DatabaseConnectionOptions): Promise<void>;
}
