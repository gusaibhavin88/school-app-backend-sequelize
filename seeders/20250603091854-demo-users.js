"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alice",
          email: "alice@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob",
          email: "bob@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Users",
      {
        email: { [Sequelize.Op.in]: ["alice@example.com", "bob@example.com"] },
      },
      {}
    );
  },
};
