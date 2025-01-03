import dotenv from "dotenv";

dotenv.config();

const ENV = {
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  MODE: process.env.MODE,
  PORT: process.env.PORT,
};

export default ENV;
