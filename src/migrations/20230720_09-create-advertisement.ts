'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('advertisements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      from: {
        type: Sequelize.DATE,
        allowNull: false
      },
      to: {
        type: Sequelize.DATE,
        allowNull: false
      },
      discount: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'}
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'products', key: 'id'}
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('advertisements');
  }
};