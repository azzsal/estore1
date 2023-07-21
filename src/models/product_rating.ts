/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Rating } from "../types";
import { sequelize } from "../utils/db";


class ProductRating extends Model<InferAttributes<ProductRating>, InferCreationAttributes<ProductRating>> {
  declare id: CreationOptional<number>;
  declare rating: Rating | null;
  declare userId: number;
  declare productId: number;

  static associate(_models: any) {
  }
}

ProductRating.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: DataTypes.ENUM,
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
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'product_rating'
});

export default ProductRating;