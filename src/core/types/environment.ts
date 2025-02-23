export type DatabaseMode = "normal" | "test";
export type EnvironmentMode = "dev" | "prod";

export interface ApplicationConfig {
  application: { spa: SpaConfig; database: DatabaseAppConfig };
}

export interface ApplicationConfigTest {
  enableDefaultDatabase: boolean;
}

export interface SpaConfig {
  enable: boolean;
  index: string;
}

export interface DatabaseAppConfig {
  enableTryConnection: boolean;
}
