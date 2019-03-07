module.exports = function (sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    name: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    climate: {
      type: DataTypes.STRING
    },
    bestSeason: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  });
  Destination.associate = function (models) {
    Destination.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Destination;
};


