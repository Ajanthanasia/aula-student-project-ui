const { Sequelize } = require("sequelize");
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const host = process.env.DB_HOST;
const connection = process.env.DB_CONNECTION;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: connection,
});

module.exports = sequelize;
