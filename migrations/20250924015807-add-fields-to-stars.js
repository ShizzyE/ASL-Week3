"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Stars", "mass", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Stars", "description", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Stars", "GalaxyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Galaxies",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Stars', 'mass');
    await queryInterface.removeColumn('Stars', 'description');
    await queryInterface.removeColumn('Stars', 'GalaxyId');
  },
};
