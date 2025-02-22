import DATABASE_ENV from "./database.env";
import z from "zod";

export const envScheme = z.object({
  MODE: z
    .union([z.literal("dev"), z.literal("prod"), z.literal("test")])
    .default("dev"),
  PORT: z.coerce.number().max(10000),
  HTTPS_REDIRECT: z.coerce.boolean().default(false),
  API_PREFIX: z.string(),
  RATE_LIMIT_MAX: z.coerce.number().max(200),
});

const ENV = {
  DATABASE: DATABASE_ENV,
  ...envScheme.parse(process.env),
};

export default ENV;
