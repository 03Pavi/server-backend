const { Sequelize } = require("sequelize");
const event_emitter = require("events");
const db_event_emitter = new event_emitter();

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME, // Replace with your database name
  username: process.env.DATABASE_USERNAME, // Replace with your username
  password: process.env.DATABASE_PASSWORD, // Replace with your password
  host: process.env.DATABASE_HOST, // Your PostgreSQL server host
  dialect: "postgres", // The dialect for PostgreSQL
  port: process.env.DATABASE_PORT, // Default PostgreSQL port
  logging: false, // Replace as per requirement. false: for hiding DB query show in console. Default is true to show log
  define: {
    underscored: true, // Enable snake_case naming for tables and columns
  },
});

const check_connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    db_event_emitter.emit("connection");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
check_connection();

module.exports = {
  sequelize,
  check_connection,
  db_event_emitter,
};
