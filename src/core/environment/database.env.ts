import databaseConfig from "./database.config";

const DATABASE_ENV = () => ({
  USER: databaseConfig.databases[databaseConfig.config.use].user,
  NAME: databaseConfig.databases[databaseConfig.config.use].name,
  HOST: databaseConfig.databases[databaseConfig.config.use].host,
  PORT: databaseConfig.databases[databaseConfig.config.use].port,
  PASSWORD: databaseConfig.databases[databaseConfig.config.use].password,
});

export default DATABASE_ENV;
