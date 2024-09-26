const { Sequelize } = require("sequelize");
const dbConfig = require('./config');

// Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

const connection = async () => {
  try {
    // test the DB connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // synchronize the model with DB
    await sequelize.sync();
    console.log("Table created successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


module.exports = {sequelize, connection};