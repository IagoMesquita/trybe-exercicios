'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', 
    [
      {
        title: "Xmen",
        author:"Stan",
        pageQuantity: 200, 
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),    
        updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Vingadores",
        author:"Lee",
        pageQuantity: 150, 
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),    
        updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Guardiões",
        author:"James Gun",
        pageQuantity: 170, 
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),    
        updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
