'use strict';
module.exports = (sequelize, DataTypes) => {
  var edges = sequelize.define('edges', {
    endNode: DataTypes.NUMERIC
  }, {});
  edges.associate = function(models) {
    // associations can be defined here

  };
  return edges;
};