const {DataTypes } = require('sequelize');
const db = require('../config/dbConnect');

const categoriasModel = db.define('categorias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  });
  
  module.exports = categoriasModel;