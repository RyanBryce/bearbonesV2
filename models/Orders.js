module.exports = function (sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    }
  });

  Orders.associate = function (models) {
    // We're saying that a Orders should belong to an User
    // A Orders can't be created without an Users due to the foreign key constraint
    Orders.belongsToMany(models.Products, {
      through: models.OrderProd,
      foreignKey: 'orderId'
    });
  };

  return Orders;
};