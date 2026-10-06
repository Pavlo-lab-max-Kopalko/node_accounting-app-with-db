'use strict';

const { sequelize } = require('../db.js');

const Expense = sequelize.define();

module.exports = {
  Expense,
};
