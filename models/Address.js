module.exports = function (sequelize, DataTypes) {
  var Address = sequelize.define("Address", {
    // Giving the Address model a name of type STRING
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Address.associate = function (models) {
    // Associating Address with Orders
    // When an Address is deleted, also delete any associated Orders
    Address.hasMany(models.Users);
  };

  return Address;
};