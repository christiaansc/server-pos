require("dotenv").config();
const { Sequelize } = require('sequelize');

switch (process.env.NODE_ENV) {
  case "production":
    DB_USERNAME = process.env.PROD_DB_USERNAME;
    DB_PASSWORD = process.env.PROD_DB_PASSWORD;
    DB_NAME = process.env.PROD_DB_NAME;
    DB_HOSTNAME = process.env.PROD_DB_HOSTNAME;
    break;
  case "staging":
    DB_USERNAME = process.env.STAGING_DB_USERNAME;
    DB_PASSWORD = process.env.STAGING_DB_PASSWORD;
    DB_NAME = process.env.STAGING_DB_NAME;
    DB_HOSTNAME = process.env.STAGING_DB_HOSTNAME;
    break;
  default:
    DB_USERNAME = process.env.DEVEL_DB_USERNAME;
    DB_PASSWORD = process.env.DEVEL_DB_PASSWORD;
    DB_NAME = process.env.DEVEL_DB_NAME;
    DB_HOSTNAME = process.env.DEVEL_DB_HOSTNAME;
    break;
}

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: "mysql",
    logging: false,
  });

  const test = async () => {
    try {
      await sequelize.authenticate();
      console.log("");
      console.log("Conectado a la BD");
      console.log(`DB name: ${DB_NAME}`);
      console.log(`HostName: ${DB_HOSTNAME}`);
      console.log("");
    } catch (error) {
      console.log(`Ocurrio un error al conectar a la BD`);
    }
  };
  
  test();
  
  module.exports = sequelize;