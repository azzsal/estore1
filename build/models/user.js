"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize/types/sequelize"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.ENUM
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    gender: {
        type: sequelize_1.DataTypes.ENUM
    },
    birthday: {
        type: sequelize_1.DataTypes.DATE
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.TEXT
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    profilePicture: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    sequelize: sequelize_2.default,
    timestamps: false,
    modelName: 'User'
});
exports.default = User;
