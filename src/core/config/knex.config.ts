import knex from "knex";
import DATABASE_ENV from "../environment/database.env";

class KnexConfig {
  // biome-ignore lint/suspicious/noExplicitAny: <used only for knex>
  private static knex: knex.Knex<any, unknown[]>;

  private constructor() {}

  static getConnection() {
    if (!KnexConfig.knex) {
      KnexConfig.knex = knex({
        client: "postgresql",
        connection: {
          host: DATABASE_ENV().HOST,
          database: DATABASE_ENV().NAME,
          user: DATABASE_ENV().USER,
          password: DATABASE_ENV().PASSWORD,
          port: DATABASE_ENV().PORT,
          pool: { min: 1, max: 2 },
        },
      });
    }

    return KnexConfig.knex;
  }
}

const knexConfig = () => KnexConfig.getConnection();

export default knexConfig;
