"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Planet.belongsTo(models.Star)
    }
  }
  Planet.init(
    {
      name: DataTypes.STRING,
      mass: DataTypes.INTEGER,
      hasRings: DataTypes.BOOLEAN,
      starId: DataTypes.INTEGER,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Planet",
    }
  );
  return Planet;
};
