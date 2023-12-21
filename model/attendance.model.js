const { sequelize } = require("../config").db_connection;
const { Sequelize, DataTypes } = require("sequelize");
const attendance_model = sequelize.define("attendance", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  session_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("present", "absent", "late", "dispense"),
    allowNull: false,
  },
});
module.exports = attendance_model;
