import DATABASE_ENV from "./database.env";
import type { EnvironmentMode } from "../types/environment";

const ENV = {
  DATABASE: DATABASE_ENV.DATABASE,
  MODE: process.env.MODE as EnvironmentMode,
  PORT: process.env.PORT,
  HTTPS_PORT: process.env.HTTPS_PORT,
  KEY_SSL_PATH: process.env.KEY_SSL_PATH,
  CERT_SSL_PATH: process.env.CERT_SSL_PATH,
  HTTPS_REDIRECT: process.env.HTTPS_REDIRECT === "true",
  API_PREFIX: process.env.API_PREFIX,
  RATE_LIMIT_MAX: Number(process.env.RATE_LIMIT_MAX),
};

export default ENV;
