module.exports = function (sequelize, DataTypes) {
  var OrderProd = sequelize.define("OrderProd", {
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  OrderProd.associate = function (models) {
    OrderProd.belongsTo(models.Products, {
      foreignKey: {
        allowNull: false
      }
    });
    // We're saying that a OrderProd should belong to an Users
    // A OrderProd can't be created without an Users due to the foreign key constraint
    OrderProd.belongsTo(models.Orders, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return OrderProd;
};