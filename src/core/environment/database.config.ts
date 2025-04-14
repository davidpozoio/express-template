import fs from "node:fs";
import yaml from "js-yaml";
import dotenv from "dotenv";
import convertKeysToCamelCase from "../utils/convert-keys-to-camel-case";
import { z } from "zod";
import type { DatabaseApplicationConfig } from "../types/database";

const databaseDataYML = fs.readFileSync("config/database.config.yml", {
  encoding: "utf-8",
});

const datababaseParsed = yaml.load(databaseDataYML);

const databaseConfig = convertKeysToCamelCase(
  datababaseParsed,
) as DatabaseApplicationConfig;

export const envOnlySchema = z.object({
  mode: z.literal("env").default("env"),
  env: z
    .string()
    .max(4000)
    .refine(
      (path) => {
        if (!fs.existsSync(path)) {
          return false;
        }
        return true;
      },
      (path) => ({ message: `${path} not found` }),
    ),
});

export const databaseVariablesSchema = z.object({
  mode: z.literal("inline").default("inline"),
  client: z.union([z.literal("postgresql"), z.literal("mysql")]),
  host: z.string().max(400),
  name: z.string().max(400),
  user: z.string().max(400),
  port: z.coerce.number(),
  password: z.string().max(1000),
});

export const databaseConfigSchema = z.union([
  envOnlySchema,
  databaseVariablesSchema,
]);

const databaseKeys = Object.keys(databaseConfig.databases);

const databaseModeSchema = z.object({
  use: z
    .string()
    .transform((value) => {
      const env = dotenv.parse(fs.readFileSync(".env"));

      return value.replace(/\$\{USE\_DATABASE\}/g, env.USE_DATABASE);
    })
    .refine(
      (value) => {
        if (databaseKeys.includes(value)) {
          return true;
        }

        return false;
      },
      (value) => ({
        message: `the database ${value} is not included in databases (${databaseKeys.join(", ")})`,
      }),
    ),
});

const config = databaseModeSchema.parse(databaseConfig.config);

const databasesSchema = z.record(databaseConfigSchema);
const databases = databasesSchema.parse(databaseConfig.databases);
databaseConfig.config = config;

const currentDatabase = databases[config.use];

if (currentDatabase.mode === "env") {
  const env = dotenv.parse(fs.readFileSync(currentDatabase.env));
  databaseConfig.databases[databaseConfig.config.use] =
    databaseVariablesSchema.parse({
      mode: "inline",
      client: env.DATABASE_CLIENT,
      host: env.DATABASE_HOST,
      name: env.DATABASE_NAME,
      user: env.DATABASE_USER,
      port: env.DATABASE_PORT,
      password: env.DATABASE_PASSWORD,
    });
}

export default databaseConfig;
