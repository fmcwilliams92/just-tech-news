// used to import the sequelize user library
const Sequelize = require('sequelize');

require('dotenv').config();

// create a connection to our database, pass in your MySql information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;