import databaseConfig, {
  databaseConfigSchema,
} from "@app/core/environment/database.config";
import supertest from "supertest";
import dotenv from "dotenv";
import type { z } from "zod";

/**
 *
 * @overriderDatabase you can override the database configuration before loading the application
 * @returns
 */
const appTest = async ({
  overrideDatabase = {},
}: {
  overrideDatabase?: Partial<z.infer<typeof databaseConfigSchema>>;
} = {}) => {
  dotenv.config();

  const databaseConfigUpdated = databaseConfigSchema.parse({
    ...databaseConfig.databases[databaseConfig.config.use],
    ...overrideDatabase,
  });

  databaseConfig.databases[databaseConfig.config.use] = databaseConfigUpdated;

  const appModule = await import("@app/app");

  return supertest(appModule.default);
};

export default appTest;
