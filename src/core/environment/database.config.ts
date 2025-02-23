import fs from "node:fs";
import yaml from "js-yaml";
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

export const databaseConfigSchema = z.object({
  client: z.union([z.literal("postgresql"), z.literal("mysql")]),
  host: z.string().max(400),
  name: z.string().max(400),
  user: z.string().max(400),
  port: z.coerce.number(),
  password: z.string().max(1000),
});

const databasesSchema = z.record(databaseConfigSchema);

databasesSchema.parse(databaseConfig.databases);

const databaseKeys = Object.keys(databaseConfig.databases);

const databaseModeSchema = z.object({
  use: z.string().refine(
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

databaseModeSchema.parse(databaseConfig.config);

export default databaseConfig;
