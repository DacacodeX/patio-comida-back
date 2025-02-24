const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const { Price } = require("../models/price.model");
const sequelize = require("./database.util");

const seedProducts = async () => {
    try {

        const categoriesData = [
            { name: "Ceviches", code: "CEVI", description: "Categoría de ceviches" },
            { name: "Chicharrones", code: "CHIC", description: "Categoría de chicharrones" },
            { name: "Arroces", code: "ARRO", description: "Categoría de arroces" },
            { name: "Combos", code: "COMB", description: "Categoría de combos" },
            { name: "Sudados", code: "SUDA", description: "Categoría de sudados" },
            { name: "Parihuelas", code: "PARI", description: "Categoría de parihuelas" },
            { name: "Fritos - Picantes", code: "FRIT", description: "Categoría de fritos" },
            { name: "Guarniciones", code: "GUAR", description: "Categoría de guarniciones" },
            { name: "Chilcanos", code: "CHIL", description: "Categoría de chicanos" },
            { name: "Bebidas", code: "BEBI", description: "Categoría de bebidas" }
        ];

        const productsData = [
            // CEVICHES
            { name: "Ceviche Simple", code: "CEVI001", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Ceviche Mixto", code: "CEVI002", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Ceviche de Mariscos", code: "CEVI003", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Ceviche de Langostinos", code: "CEVI004", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Ceviche de Cangrejos", code: "CEVI005", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Ceviche Salpreso", code: "CEVI006", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Maruchitas", code: "CEVI007", description: "(sin descripción)", categoryCode: 'CEVI' },
            { name: "Leche Tigre", code: "CEVI008", description: "(sin descripción)", categoryCode: 'CEVI' },
            // CHICHARRONES
            { name: "Chicharrón de Pota", code: "CHIC001", description: "(sin descripción)", categoryCode: 'CHIC' },
            { name: "Chicharrón de Pescado", code: "CHIC002", description: "(sin descripción)", categoryCode: 'CHIC' },
            { name: "Chicharrón Mixto", code: "CHIC003", description: "(sin descripción)", categoryCode: 'CHIC' },
            { name: "Chicharrón de Langostinos", code: "CHIC004", description: "(sin descripción)", categoryCode: 'CHIC' },
            { name: "Chicharrón de Calamar", code: "CHIC005", description: "(sin descripción)", categoryCode: 'CHIC' },
            { name: "Jalea Mixta", code: "CHIC006", description: "(sin descripción)", categoryCode: 'CHIC' },
            // ARROCES
            { name: "Arroz con Mariscos", code: "ARRO001", description: "(sin descripción)", categoryCode: 'ARRO' },
            { name: "Arroz con Langostinos", code: "ARRO002", description: "(sin descripción)", categoryCode: 'ARRO' },
            { name: "Chaufa de Mariscos", code: "ARRO003", description: "(sin descripción)", categoryCode: 'ARRO' },
            { name: "Chaufa de Pescado", code: "ARRO004", description: "(sin descripción)", categoryCode: 'ARRO' },
            { name: "Chaufa de Langostinos", code: "ARRO005", description: "(sin descripción)", categoryCode: 'ARRO' },
            // COMBOS
            { name: "Triple", code: "COMB001", description: "(sin descripción)", categoryCode: 'COMB' },
            { name: "Combo 1", code: "COMB002", description: "(sin descripción)", categoryCode: 'COMB' },
            { name: "Combo 2", code: "COMB003", description: "(sin descripción)", categoryCode: 'COMB' },
            { name: "Combo 3", code: "COMB004", description: "(sin descripción)", categoryCode: 'COMB' },
            // SUDADOS
            { name: "Tollo", code: "SUDA001", description: "(sin descripción)", categoryCode: 'SUDA' },
            { name: "Suco", code: "SUDA002", description: "(sin descripción)", categoryCode: 'SUDA' },
            { name: "Cabrilla", code: "SUDA003", description: "(sin descripción)", categoryCode: 'SUDA' },
            { name: "Chita", code: "SUDA004", description: "(sin descripción)", categoryCode: 'SUDA' },
            { name: "Tramboyo", code: "SUDA005", description: "(sin descripción)", categoryCode: 'SUDA' },
            // PARIHUELAS
            { name: "Tollo", code: "PARI001", description: "(sin descripción)", categoryCode: 'PARI' },
            { name: "Suco", code: "PARI002", description: "(sin descripción)", categoryCode: 'PARI' },
            { name: "Cabrilla", code: "PARI003", description: "(sin descripción)", categoryCode: 'PARI' },
            { name: "Chita", code: "PARI004", description: "(sin descripción)",  categoryCode: 'PARI' },
            { name: "Tramboyo", code: "PARI005", description: "(sin descripción)", categoryCode: 'PARI' },
            // FRITOS - PICANTES
            { name: "Suco Frito", code: "FRIT001", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Cabrilla Frita", code: "FRIT002", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Chita Frita", code: "FRIT003", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Picante de Mariscos", code: "FRIT004", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Picante de Langostinos", code: "FRIT005", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Reventado de Cangrejos", code: "FRIT006", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Pescado a lo Macho", code: "FRIT007", description: "(sin descripción)", categoryCode: 'FRIT' },
            { name: "Chita al Ajo", code: "FRIT008", description: "(sin descripción)", categoryCode: 'FRIT' },
            // GUARNICIONES
            { name: "Arroz", code: "GUAR001", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Yuca", code: "GUAR002", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Camote", code: "GUAR003", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Cancha", code: "GUAR004", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Chifle", code: "GUAR005", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Choclo", code: "GUAR006", description: "(sin descripción)", categoryCode: 'GUAR' },
            { name: "Yuca Frita", code: "GUAR007", description: "(sin descripción)", categoryCode: 'GUAR' },
            // CHILCANOS
            { name: "Tollo", code: "CHIL001", description: "(sin descripción)", categoryCode: 'CHIL' },
            { name: "Suco", code: "CHIL002", description: "(sin descripción)", categoryCode: 'CHIL' },
            { name: "Cabrilla", code: "CHIL003", description: "(sin descripción)", categoryCode: 'CHIL' },
            { name: "Chita", code: "CHIL004", description: "(sin descripción)", categoryCode: 'CHIL' },
            { name: "Tramboyo", code: "CHIL005", description: "(sin descripción)", categoryCode: 'CHIL' },
            // BEBIDAS
            { name: "Chicha", code: "BEBI001", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Maracuyá", code: "BEBI002", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Agua", code: "BEBI003", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Trigo", code: "BEBI004", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Negra", code: "BEBI005", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Gaseosa 1/2", code: "BEBI006", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Gordito", code: "BEBI007", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Gaseosa 1L", code: "BEBI008", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Gaseosa 2L", code: "BEBI009", description: "(sin descripción)", categoryCode: 'BEBI' },
            { name: "Gaseosa 3L", code: "BEBI010", description: "(sin descripción)", categoryCode: 'BEBI' },
        ];

        const pricesData = {
            // PRECIOS CEVICHES
            "CEVI001": { personal: 25.0, fuente: 52.0 },
            "CEVI002": { personal: 28.0, fuente: 58.0 },
            "CEVI003": { personal: 32.0, fuente: 65.0 },
            "CEVI004": { personal: 33.0, fuente: 65.0 },
            "CEVI005": { personal: 32.0, fuente: 65.0 },
            "CEVI006": { personal: 24.0, fuente: 50.0 },
            "CEVI007": { personal: 15.0 },
            "CEVI008": { personal: 15.0 },
            // PRECIOS CHICHARRONES
            "CHIC001": { personal: 28.0, fuente: 58.0 },
            "CHIC002": { personal: 28.0, fuente: 58.0 },
            "CHIC003": { personal: 32.0, fuente: 65.0 },
            "CHIC004": { personal: 33.0, fuente: 65.0 },
            "CHIC005": { personal: 33.0, fuente: 65.0 },
            "CHIC006": { personal: 40.0, fuente: 70.0 },
            // PRECIOS ARROCES
            "ARRO001": { personal: 30.0, fuente: 60.0 },
            "ARRO002": { personal: 33.0, fuente: 65.0 },
            "ARRO003": { personal: 30.0, fuente: 60.0 },
            "ARRO004": { personal: 27.0, fuente: 55.0 },
            "ARRO005": { personal: 33.0, fuente: 65.0 },
            // PRECIOS COMBOS
            "COMB001": { personal: 33.0, fuente: 63.0 },
            "COMB002": { personal: 29.0, fuente: 58.0 },
            "COMB003": { personal: 29.0, fuente: 58.0 },
            "COMB004": { personal: 29.0, fuente: 58.0 },
            // PRECIOS SUDADOS
            "SUDA001": { personal: 28.0, fuente: 50.0 },
            "SUDA002": { personal: 30.0, fuente: 55.0 },
            "SUDA003": { personal: 30.0, fuente: 55.0 },
            "SUDA004": { personal: 35.0, fuente: 65.0 },
            "SUDA005": { personal: 35.0, fuente: 65.0 },
            // PRECIOS PARIHUELAS
            "PARI001": { personal: 32.0, fuente: 60.0 },
            "PARI002": { personal: 35.0, fuente: 65.0 },
            "PARI003": { personal: 35.0, fuente: 65.0 },
            "PARI004": { personal: 40.0, fuente: 75.0 },
            "PARI005": { personal: 40.0, fuente: 75.0 },
            // PRECIOS FRITOS Y PICANTES
            "FRIT001": { personal: 30.0 },
            "FRIT002": { personal: 30.0 },
            "FRIT003": { personal: 35.0 },
            "FRIT004": { personal: 32.0 },
            "FRIT005": { personal: 33.0 },
            "FRIT006": { personal: 32.0 },
            "FRIT007": { personal: 40.0 },
            "FRIT008": { personal: 40.0 },
            // PRECIOS GUARNICIONES
            "GUAR001": { personal: 5.0 },
            "GUAR002": { personal: 5.0 },
            "GUAR003": { personal: 5.0 },
            "GUAR004": { personal: 5.0 },
            "GUAR005": { personal: 6.0 },
            "GUAR006": { personal: 5.0 },
            "GUAR007": { personal: 7.0 },
            // PRECIOS CHILCANOS
            "CHIL001": { personal: 28.0 },
            "CHIL002": { personal: 30.0 },
            "CHIL003": { personal: 30.0 },
            "CHIL004": { personal: 35.0 },
            "CHIL005": { personal: 35.0 },
            // PRECIOS BEBIDAS
            "BEBI001": { personal: 10.0 },
            "BEBI002": { personal: 10.0 },
            "BEBI003": { personal: 3.0 },
            "BEBI004": { personal: 10.0 },
            "BEBI005": { personal: 10.0 },
            "BEBI006": { personal: 4.0 },
            "BEBI007": { personal: 5.0 },
            "BEBI008": { personal: 7.0 },
            "BEBI009": { personal: 12.0 },
            "BEBI010": { personal: 16.0 },
        };


        const categories = await Category.bulkCreate(categoriesData, { returning: true });

        const categoryMap = categories.reduce((map, category) => {
            map[category.code] = category.id;
            return map;
        }, {});

        const productsWithCategory = productsData.map(product => ({
            ...product,
            categoryId: categoryMap[product.categoryCode]
        }));

        const products = await Product.bulkCreate(productsWithCategory, { returning: true });

        const prices = products.flatMap(product =>
            Object.entries(pricesData[product.code]).map(([type, price]) => ({
                productId: product.id,
                type,
                price
            }))
        );

        await Price.bulkCreate(prices);

        console.log("✅ Categorías, productos y precios creados exitosamente.");
        process.exit();
    } catch (error) {
        console.error("❌ Error al poblar la base de datos:", error);
        process.exit(1);
    }
};

seedProducts();
