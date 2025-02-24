const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.util');

const Request = sequelize.define('Request', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('desaparecido', 'encontrado', 'otro'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100]
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 0
        }
    },
    gender: {
        type: DataTypes.ENUM('masculino', 'femenino', 'otro', 'desconocido'),
        allowNull: true
    },
    documents: {
        type: DataTypes.STRING,
        allowNull: true
    },
    affectedStatus: {
        type: DataTypes.ENUM('a salvo', 'herido', 'fallecido', 'desconocido'),
        allowNull: true
    },
    lastSightingPlace: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descriptionPhysics: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    additionalNotes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pendiente', 'aprobado', 'rechazado', 'resuelto'),
        allowNull: false,
        defaultValue: 'pendiente'
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true,
    underscored: true,
});

module.exports = { Request };