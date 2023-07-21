/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelize } from '../utils/db';


class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number | null;
  declare description: string | null;
  declare amount: number | null;

  static associate(models : any) {
    Product.belongsTo(models.category);
    Product.belongsTo(models.supplier);
    Product.hasMany(models.productImage);
    Product.belongsToMany(models.invoice, { through: models.invoiceItem});
    Product.belongsToMany(models.user, { through: models.productRating});
    Product.belongsToMany(models.user, { through: models.advertisement});
  }
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(8, 2)
  },
  description: {
    type: DataTypes.TEXT
  },
  amount: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'product'
});

export default Product;



