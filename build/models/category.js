"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    }
}, {
    sequelize,
    modelName: 'Category',
});
exports.default = Category;
