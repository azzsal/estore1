/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic } from "sequelize";
import { sequelize } from "../utils/db";


class MonthlyExpenses extends Model<InferAttributes<MonthlyExpenses>, InferCreationAttributes<MonthlyExpenses>> {
  declare id: CreationOptional<number>;
  declare service: string;
  declare fees: number;

  static associate(models: { user: ModelStatic<Model<any, any>>; }) {
    MonthlyExpenses.belongsTo(models.user);
  }

}

MonthlyExpenses.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  service: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fees: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false
  }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'monthlyExpenses'
  }
);

export default MonthlyExpenses;