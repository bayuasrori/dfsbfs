'use strict';
module.exports = (sequelize, DataTypes) => {
  var map = sequelize.define('map', {
    mapName: DataTypes.STRING
  }, {});
  map.associate = function(models) {
    // associations can be defined here
  };
  return map;
};