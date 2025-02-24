const sequelize = require("./database.util");

const clearData = async () => {
    try {
        console.log("🧹 Eliminando todos los datos y reseteando IDs...");

        await sequelize.query("SET CONSTRAINTS ALL DEFERRED");

        const models = Object.values(sequelize.models);
        await Promise.all(
            models.map((model) => model.destroy({ truncate: true, cascade: true, restartIdentity: true }))
        );

        console.log("✅ Datos eliminados y secuencias reseteadas a 1.");
        process.exit();
    } catch (error) {
        console.error("❌ Error al limpiar los datos:", error);
        process.exit(1);
    }
};

clearData();
