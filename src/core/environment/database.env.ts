import z from "zod";
import type { DatabaseMode } from "../types/environment";

export const DATABASE_MODE =
  (process.env.DATABASE_MODE as DatabaseMode) || "normal";

const DATABASE_ENV = {
  /**
   *
   * @param mode specify what database you want to use
   * by default uses normal mode
   * @returns
   */
  DATABASE(mode: DatabaseMode = "normal" as DatabaseMode) {
    const databaseScheme = z.object({
      USER: z.string().max(200),
      NAME: z.string(),
      HOST: z.string().url(),
      PORT: z.coerce.number().max(10000),
      PASSWORD: z.string().max(1000),
    });

    if (mode === "normal") {
      return databaseScheme.parse({
        USER: process.env.DATABASE_USER,
        NAME: process.env.DATABASE_NAME,
        HOST: process.env.DATABASE_HOST,
        PORT: process.env.DATABASE_PORT,
        PASSWORD: process.env.DATABASE_PASSWORD,
      });
    }
    return databaseScheme.parse({
      USER: process.env.TEST_DATABASE_USER,
      NAME: process.env.TEST_DATABASE_NAME,
      HOST: process.env.TEST_DATABASE_HOST,
      PORT: process.env.TEST_DATABASE_PORT,
      PASSWORD: process.env.TEST_DATABASE_PASSWORD,
    });
  },
};

export default DATABASE_ENV;
