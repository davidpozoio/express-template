import DatabaseConnection from "./database-connection";
import SequelizeConnectionRepository from "./sequelize-connection.repository";

export const databaseConnection = new DatabaseConnection(
  new SequelizeConnectionRepository(),
);
