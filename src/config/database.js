require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEVEL_DB_USERNAME,
    password: process.env.DEVEL_DB_PASSWORD,
    database: process.env.DEVEL_DB_NAME,
    host: process.env.DEVEL_DB_HOSTNAME,
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
      timezone: "GMT",
    },
    define: {
      charset: "utf8mb4",
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 1000000,
      idle: 200000,
    },
    benchmark: true,
  },
  test: {
    username: "root",
    password: null,
    database: "server_pos",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      charset: "utf8mb4",
      timezone: "GMT",
    },
    define: {
      charset: "utf8mb4",
    },
    pool: {
      max: 100,
      min: 2,
      acquire: 100000,
      idle: 15000,
      evict: 10000,
    },
  },
  staging: {
    username: process.env.STAGING_DB_USERNAME,
    password: process.env.STAGING_DB_PASSWORD,
    database: process.env.STAGING_DB_NAME,
    host: "aca stage",
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
      timezone: "GMT",
    },
    define: {
      charset: "utf8mb4",
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 1000000,
      idle: 200000,
    },
    benchmark: true,
  },
};
