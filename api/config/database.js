const Sequelize = require('sequelize');
require('dotenv').config();
const pg = require('pg');

module.exports = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg,
});