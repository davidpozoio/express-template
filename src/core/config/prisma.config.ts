import { PrismaClient } from "@prisma/client";
import DATABASE_ENV from "../environment/database.env";

class PrismaConfig {
  private static prisma: PrismaClient | undefined;

  private constructor() {}

  static getConnection() {
    if (!PrismaConfig.prisma) {
      PrismaConfig.prisma = new PrismaClient({
        datasourceUrl: `postgresql://${DATABASE_ENV().USER}:${DATABASE_ENV().PASSWORD}@${DATABASE_ENV().HOST}:${DATABASE_ENV().PORT}/${DATABASE_ENV().NAME}?schema=public`,
      });
    }

    return PrismaConfig.prisma;
  }
}

const prisma = () => PrismaConfig.getConnection();

export default prisma;
