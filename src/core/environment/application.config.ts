import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";
import type { ApplicationConfig } from "../types/environment";
import convertKeysToCamelCase from "../utils/convert-keys-to-camel-case";
import { z } from "zod";

const applicationFile = fs.readFileSync("application.config.yml", {
  encoding: "utf-8",
});

const data = yaml.load(applicationFile);

const { application: applicationConfig } = convertKeysToCamelCase(
  data,
) as ApplicationConfig;

const spaModeSchema = z.object({
  enable: z.coerce.boolean().default(true),
  index: z.string().default(path.resolve("public/frontend/index.html")),
});

const databaseAppSchema = z.object({
  enableTryConnection: z.coerce.boolean().default(true),
});

const applicationSchema = z
  .object({
    spa: spaModeSchema,
    database: databaseAppSchema,
  })
  .strict();

applicationSchema.parse(applicationConfig);

export default applicationConfig;
