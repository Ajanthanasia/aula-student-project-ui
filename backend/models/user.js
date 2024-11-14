const { DataTypes } = require("sequelize");

const sequelize = require("./../db/mysql-database.js");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    job_id: {
      type: DataTypes.INTEGER,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      primaryKey: false,
    },
    token: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    status_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = User;
