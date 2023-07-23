'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_ratings', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rating: {
        type: Sequelize.ENUM('ONE_STAR', 'TWO_STARS', 'THREE_STARS', 'FOUR_STARS', 'FIVE_STARS')
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
    await queryInterface.dropTable('product_ratings');
  }
};