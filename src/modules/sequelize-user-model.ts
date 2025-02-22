import sequelize from "@app/core/config/sequelize.config";
import { DataTypes, type Model } from "sequelize";
import type User from "./user.entity";

const UserSequelize = sequelize.define<Model<User>>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(),
    },
  },
  { timestamps: false, underscored: true },
);

export default UserSequelize;
