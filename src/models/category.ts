/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, Model, ModelStatic } from "sequelize";
import { sequelize } from "../utils/db";

class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string | null;

  static associate(models: { product: ModelStatic<Model<any, any>>; }) {
    Category.hasMany(models.product);

  }
} 

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'category'
});

export default Category;