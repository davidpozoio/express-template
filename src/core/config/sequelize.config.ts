import { Sequelize } from "sequelize";
import ENV from "../environment/environment";
import { DATABASE_MODE } from "../environment/database.env";

const sequelize = new Sequelize({
  database: ENV.DATABASE(DATABASE_MODE).NAME /*it uses default database mode*/,
  host: ENV.DATABASE(DATABASE_MODE).HOST,
  username: ENV.DATABASE(DATABASE_MODE).USER,
  password: ENV.DATABASE(DATABASE_MODE).PASSWORD,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 1,
  },
  logging: false,
});

export default sequelize;
