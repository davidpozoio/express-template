import { Sequelize } from "sequelize";
import ENV from "../environment/environment";

const sequelize = new Sequelize({
  database: ENV.DATABASE_NAME,
  host: ENV.DATABASE_HOST,
  username: ENV.DATABASE_USER,
  password: ENV.DATABASE_PASSWORD,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 1,
  },
  logging: false,
});

export default sequelize;
