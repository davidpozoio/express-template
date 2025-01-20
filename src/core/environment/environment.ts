import dotenv from "dotenv";
import DATABASE_ENV from "./database.env";
import type { EnvironmentMode } from "../types/environment";

dotenv.config();

const ENV = {
  DATABASE: DATABASE_ENV.DATABASE,
  MODE: process.env.MODE as EnvironmentMode,
  PORT: process.env.PORT,
  HTTPS_PORT: process.env.HTTPS_PORT,
  KEY_SSL_PATH: process.env.KEY_SSL_PATH,
  CERT_SSL_PATH: process.env.CERT_SSL_PATH,
  HTTPS_REDIRECT: process.env.HTTPS_REDIRECT === "true",
};

export default ENV;
