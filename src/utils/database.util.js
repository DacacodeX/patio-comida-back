const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Esto es necesario para forzar SSL
      rejectUnauthorized: false, // Esto puede ser necesario si tu CA no es de confianza
    },
  },
  logging: process.env.LOG_LEVEL === 'debug' ? console.log : false
});

module.exports = sequelize;
