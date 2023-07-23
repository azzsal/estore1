/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/db";


class ProductImage extends Model<InferAttributes<ProductImage>, InferCreationAttributes<ProductImage>> {
  declare id: CreationOptional<number>;
  declare imageUrl: string;
 
  static associate(models : any) {
    ProductImage.belongsTo(models.product);
  }
}

ProductImage.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'productImage'
});

export default ProductImage;