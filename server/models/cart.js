'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.User, {foreignKey: "userId"})
      Cart.belongsTo(models.Product, {foreignKey: "productId"})
    }
  };
  Cart.init({
    productId: DataTypes.INTEGER,
    productQty: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: "Minimal quantity 1"
        }
      }
    },
    checkOut: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};