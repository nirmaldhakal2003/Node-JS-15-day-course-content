const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('nirmal','root','',{
    host : 'localhost',
    port : 3306
})
// (databse name , username , password default empty, host/post)
