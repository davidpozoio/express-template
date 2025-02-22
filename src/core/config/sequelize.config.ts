import { Sequelize } from "sequelize";
import DATABASE_ENV from "../environment/database.env";

class SequelizeConfig {
  static sequelize: Sequelize | undefined;
  private constructor() {}

  static getConnection() {
    if (!SequelizeConfig.sequelize) {
      SequelizeConfig.sequelize = new Sequelize({
        database: DATABASE_ENV().NAME /*it uses default database mode*/,
        host: DATABASE_ENV().HOST,
        username: DATABASE_ENV().USER,
        password: DATABASE_ENV().PASSWORD,
        dialect: "postgres",
        pool: {
          max: 10,
          min: 1,
        },
        logging: false,
      });
    }

    return SequelizeConfig.sequelize;
  }
}

const sequelize = () => SequelizeConfig.getConnection();

export default sequelize;
