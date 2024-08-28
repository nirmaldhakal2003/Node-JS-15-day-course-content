const { Sequelize, DataTypes } = require('sequelize');
const databaseConfig = require('../config/dbConfig');
const makeBlogTable = require('./blogModel');
const makeUserTable = require('./userModel');
// import { Sequelize, DataTypes } from 'sequelize'; // Use this line only if you are using ES6 modules

// (database name, username, password default empty, host/post)
const sequelize = new Sequelize(databaseConfig.db, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    operatorsAliases : false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // Increase acquire time from 3000 to 30000 to avoid timeout
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("milo hai ta guys");
    })
    .catch((err) => {
        console.log("error aayo hai");
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = makeBlogTable(sequelize,DataTypes)
db.users = makeUserTable(sequelize,DataTypes)

db.sequelize.sync({ force: false }).then(() => {
    console.log("Synced Done!");
}).catch((err) => {
    console.log("Sync failed:", err);
});

module.exports = db;
