const { Table } = require("../models/request.model");
const sequelize = require("./database.util");

const seedTables = async () => {
    try {
        await sequelize.sync();

        const tables = Array.from({ length: 27 }, (_, i) => ({
            number: i + 1,
            capacity: 4,
            state: "disponible",
        }));

        await Table.bulkCreate(tables);

        console.log("✅ 27 mesas creadas exitosamente.");
        process.exit();
    } catch (error) {
        console.error("❌ Error al poblar las mesas:", error);
        process.exit(1);
    }
};

seedTables();
