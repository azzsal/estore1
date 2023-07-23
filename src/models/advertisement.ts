/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/db";

class Advertisement extends Model<InferAttributes<Advertisement>, InferCreationAttributes<Advertisement>> {
  declare id: CreationOptional<number>;
  declare from: Date;
  declare to: Date;
  declare discount: number;
  declare title: string;
  declare userId: number;
  declare productId: number;

  static associate(_models: any) {
    
  }
}

Advertisement.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  from: {
    type: DataTypes.DATE,
    allowNull: false
  },
  to: {
    type: DataTypes.DATE,
    allowNull: false
  },
  discount: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'user', key: 'id'}
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'product', key: 'id'}
  }
},{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'advertisement'
});


export default Advertisement;