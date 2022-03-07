'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const TableBooks = await queryInterface.createTable('Books', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })

    return TableBooks;
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
