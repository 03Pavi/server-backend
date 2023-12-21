const { sequelize } = require("../config").db_connection;
const { Sequelize, DataTypes } = require("sequelize");
const session_model = sequelize.define("session", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  group_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }, // Foreign key to Group
  expected_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  real_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("theoretical_practical", "practical"),
    allowNull: false,
  },
  hours: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  week: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = session_model;
