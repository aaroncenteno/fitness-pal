// import Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create variable for database use in heroku
let sequelize;

// app will use heroku's process.env.JAWSDB_URL
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // otherwise use our localhost
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;