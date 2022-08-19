const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Products = sequelize.define(
    'products',
    {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        EAN: {
            type: DataTypes.STRING,
        },
        UPC: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Products;
