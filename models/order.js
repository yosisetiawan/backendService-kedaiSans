'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.menu, {
      as:'menu_id',
      foreignKey: 'menuId'
    })
    order.belongsTo(models.transaction, {
      as:'transaction_id',
      foreignKey: 'transactionId'
    })

  };
  return order;
};