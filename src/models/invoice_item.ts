/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/db";

class InvoiceItem extends Model<InferAttributes<InvoiceItem>, InferCreationAttributes<InvoiceItem>> {
  declare id: CreationOptional<number>;
  declare quantity: number;
  declare invoiceId: number;
  declare productId: number;

  static associate(_models : any) {

  } 
}

InvoiceItem.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  invoiceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'invoice', key: 'id'}
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'product', key: 'id'}
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'invoiceItem'
});

export default InvoiceItem;