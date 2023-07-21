'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('Admin', 'StorageManager', 'AdvertisingManager', 'User')
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female')
      },
      birthday: {
        type: Sequelize.DATE
      },
      phoneNumber: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      profilePicture: {
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

