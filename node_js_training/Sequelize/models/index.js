const {sequelize} = require('../config/db');

const Customer = require('./customer');

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

module.exports = { connection, Customer };
