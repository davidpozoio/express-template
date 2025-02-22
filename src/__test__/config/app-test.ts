import databaseConfig, {
  databaseConfigSchema,
} from "@app/core/environment/database.config";
import supertest from "supertest";
import type { z } from "zod";

const appTest = async ({
  database,
}: {
  database: Partial<z.infer<typeof databaseConfigSchema>>;
}) => {
  databaseConfigSchema.parse({
    ...databaseConfig.databases[databaseConfig.config.use],
    ...database,
  });
  //execute env loading
  const appModule = await import("@app/app");

  return supertest(appModule.default);
};

export default appTest;
