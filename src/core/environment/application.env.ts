import yaml from "js-yaml";
import fs from "node:fs";
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

const applicationSchema = z.object({
  spaMode: z.coerce.boolean().default(true),
  test: z.object({
    enableDefaultDatabase: z.coerce.boolean().default(false),
  }),
});

applicationSchema.parse(applicationConfig);

export default applicationConfig;
