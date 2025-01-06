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
  HTTPS_PORT: process.env.HTTPS_PORT,
  KEY_SSL_PATH: process.env.KEY_SSL_PATH,
  CERT_SSL_PATH: process.env.CERT_SSL_PATH,
  HTTPS_REDIRECT: process.env.HTTPS_REDIRECT == "true",
};

export default ENV;
