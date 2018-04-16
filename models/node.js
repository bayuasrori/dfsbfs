'use strict';
module.exports = (sequelize, DataTypes) => {
  var node = sequelize.define('node', {
    nodeName: DataTypes.STRING
  }, {});
  node.associate = function(models) {
    // associations can be defined here
  };
  return node;
};