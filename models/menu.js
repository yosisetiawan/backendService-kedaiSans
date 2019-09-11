'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoryId: DataTypes.INTEGER,
    images: DataTypes.STRING
  }, {});
  menu.associate = function(models) {
    menu.belongsTo(models.categorie, {
      as: 'category_id',
      foreignKey: 'categoryId'
    })
  };
  return menu;
};