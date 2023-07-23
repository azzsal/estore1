'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('monthly_expenses', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fees: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'}
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('monthly_expenses');
  }
};