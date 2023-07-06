const {DataTypes } = require('sequelize');
const db = require('../config/dbConnect');

const ventasModel = db.define('ventas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    precio: {
      type: DataTypes.INTEGER,
      defaultValue: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      defaultValue: true,
      allowNull: false,
    },
  });
  
  module.exports = ventasModel;