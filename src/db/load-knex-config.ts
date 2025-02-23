import databaseConfig from "@app/core/environment/database.config";
import path from "node:path";
import { Knex } from "knex";

const loadKnexConfig = (): { [key: string]: Knex.Config } => {
  const config: { [key: string]: Knex.Config } = {};

  for (const [key, value] of Object.entries(databaseConfig.databases)) {
    config[key] = {
      client: value.client,
      connection: {
        host: value.host,
        database: value.name,
        user: value.user,
        port: value.port,
        password: value.password,
        pool: { min: 1, max: 2 },
      },
      migrations: {
        directory: path.resolve("src", "db", "migrations"),
        loadExtensions: [".ts"],
        extension: "ts",
      },
    };
  }

  return config;
};

export default loadKnexConfig;
