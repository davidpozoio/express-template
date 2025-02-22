export type DatabaseQueryOptions<T> =
  | { replacements: T; raw?: never }
  // biome-ignore lint/suspicious/noExplicitAny: <You can use any type like number, string, Date, etc>
  | { raw: any[]; replacements?: never };

export interface DatabaseApplicationConfig {
  config: DatabaseGlobalConfig;
  databases: Record<string, DatabaseConfig>;
}

export interface DatabaseGlobalConfig {
  use: string;
}

export interface DatabaseConfig {
  client: "postgresql" | "mysql";
  user: string;
  name: string;
  host: string;
  port: number;
  password: string;
}
