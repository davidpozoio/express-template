import { Sequelize } from "sequelize";
import ENV from "../environment/environment";
import type { DatabaseMode } from "../types/environment";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class SequelizeMother {
  static create({ mode }: { mode: DatabaseMode }) {
    return new Sequelize({
      database: ENV.DATABASE(mode).NAME,
      host: ENV.DATABASE(mode).HOST,
      username: ENV.DATABASE(mode).USER,
      password: ENV.DATABASE(mode).PASSWORD,
      dialect: "postgres",
      pool: {
        max: 10,
        min: 1,
      },
      logging: false,
    });
  }
}
