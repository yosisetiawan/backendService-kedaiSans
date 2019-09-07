'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoryId: DataTypes.INTEGER,
    images: DataTypes.STRING
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
  };
  return menu;
};