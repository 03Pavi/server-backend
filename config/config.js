require('dotenv').config();

module.exports = {
  "local": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage" : "sequelize"
  },
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host":  process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage" : "sequelize"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host":  process.env.DATABASE_HOST,
    "dialect": "postgres",
    "seederStorage" : "sequelize"
  }
};
