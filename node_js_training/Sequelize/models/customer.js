const { DataTypes } = require("sequelize");
const {sequelize} = require('../config/db');

// create a model(table)
const customerModel = sequelize.define("customers", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // ensure email is unique
      validate : {
        isEmail: true,
      }
    },
  });

module.exports = customerModel;  