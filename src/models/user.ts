/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { Role, Gender } from '../types';
import { sequelize } from '../utils/db';


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: Role;
  declare active: boolean;
  declare gender: Gender | null;
  declare birthday: Date | null;
  declare phoneNumber: string | null;
  declare description: string | null;
  declare profilePicture: string | null;

  static associate(models : any) {
    User.hasMany(models.monthlyExpenses);
    User.hasMany(models.invoice);
    User.belongsToMany(models.product, { through: models.productRating});
    User.belongsToMany(models.product, { through: models.advertisement});
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('Admin', 'User', 'StorageManager', 'AdvertisingManager')
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female')
  },
  birthday: {
    type: DataTypes.DATE
  },
  phoneNumber: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
  },
  profilePicture: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'user'
});

export default User;
