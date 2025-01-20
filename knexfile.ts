import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
import ENV from "./src/core/environment/environment";
import path from "node:path";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  dev: {
    client: "postgresql",
    connection: {
      host: ENV.DATABASE("normal").HOST,
      database: ENV.DATABASE("normal").NAME,
      port: Number(ENV.DATABASE("normal").PORT),
      user: ENV.DATABASE("normal").USER,
      password: ENV.DATABASE("normal").PASSWORD,
      pool: { min: 1, max: 2 },
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "db", "migrations"),
    },
  },
  test: {
    client: "postgresql",
    connection: {
      host: ENV.DATABASE("test").HOST,
      database: ENV.DATABASE("test").NAME,
      port: Number(ENV.DATABASE("test").PORT),
      user: ENV.DATABASE("test").USER,
      password: ENV.DATABASE("test").PASSWORD,
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
