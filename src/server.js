const { app, sequelize } = require("./app");

// Verificar conexión a la base de datos
sequelize
    .authenticate()
    .then(() => console.log("✅ Conectado a la base de datos PostgreSQL"))
    .catch((err) => console.error("❌ No se pudo conectar a la base de datos", err));

sequelize
    .sync({
        force: process.env.DB_FORCE === "true",
        alter: process.env.DB_ALTER === "true",
    })
    .then(() => console.log("✅ Modelos sincronizados con la base de datos"))
    .catch((err) => console.error("❌ Error al sincronizar los modelos", err));

// Escuchar en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
