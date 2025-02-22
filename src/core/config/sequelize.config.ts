import { Sequelize } from "sequelize";
import ENV from "../environment/environment";

const sequelize = new Sequelize({
  database: ENV.DATABASE.NAME /*it uses default database mode*/,
  host: ENV.DATABASE.HOST,
  username: ENV.DATABASE.USER,
  password: ENV.DATABASE.PASSWORD,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 1,
  },
  logging: false,
});

export default sequelize;
