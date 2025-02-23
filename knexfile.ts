import loadKnexConfig from "@app/db/load-knex-config";
import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = loadKnexConfig();

export default config;
