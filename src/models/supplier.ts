/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/db";

class Supplier extends Model<InferAttributes<Supplier>, InferCreationAttributes<Supplier>> {
  declare id: CreationOptional<number>;
  declare name: string;

  static associate(models : any) {
    Supplier.hasMany(models.product);
  }
}

Supplier.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true  
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'supplier'
});

export default Supplier;