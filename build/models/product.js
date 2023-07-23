"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(8, 2)
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Product',
});
exports.default = Product;
