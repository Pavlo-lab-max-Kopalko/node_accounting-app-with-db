'use strict';

const { sequelize } = require('../db.js');

const User = sequelize.define();

module.exports = {
  User,
};
