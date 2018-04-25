module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }
  });

  Users.associate = function (models) {
    // Associating Users with Orders
    // When an Users is deleted, also delete any associated Orders
    Users.hasMany(models.Orders);
    Users.hasMany(models.Address);
  };

  return Users;
};