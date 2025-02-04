export type DatabaseMode = "normal" | "test";
export type EnvironmentMode = "dev" | "prod";

export interface ApplicationConfig {
  application: { test: ApplicationConfigTest; spaMode: boolean };
}

export interface ApplicationConfigTest {
  enableDefaultDatabase: boolean;
}
