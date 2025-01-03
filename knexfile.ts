import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
import ENV from "./src/core/environment/environment";
import path from "path";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: ENV.DATABASE_HOST,
      database: ENV.DATABASE_NAME,
      port: Number(ENV.DATABASE_PORT),
      user: ENV.DATABASE_USER,
      password: ENV.DATABASE_PASSWORD,
      pool: { min: 1, max: 2 },
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "db", "migrations"),
    },
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};

module.exports = config;
