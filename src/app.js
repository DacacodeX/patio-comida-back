const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS dinámico desde variables de entorno
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Configuración de la base de datos
const sequelize = require("./utils/database.util");

// Importar asociaciones
require("./models/associations");

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de sistema ERP para restaurantes",
      version: "1.0.0",
      description: "API para manejar todos los procesos de un restaurante",
    },
    servers: [{ url: process.env.URL_API || "http://localhost:3000" }],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Cargar rutas dinámicamente
fs.readdirSync(path.join(__dirname, "routes")).forEach((file) => {
  if (file.endsWith(".routes.js")) {
    const route = require(`./routes/${file}`);
    const routeName = file.replace(".routes.js", "");
    app.use(`/api/${routeName}`, route);
    console.log(`Route ${routeName} exists!`);
  }
});

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Exportar la app y la conexión a la base de datos
module.exports = { app, sequelize };
