'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.STRING,
    subTotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.BOOLEAN
  }, {});
  transaction.associate = function(models) {
  //  
  };
  return transaction;
};