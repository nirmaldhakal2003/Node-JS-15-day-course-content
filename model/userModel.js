const { password } = require("../config/dbConfig")

const makeUserTable = (sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
         username : {
             type : DataTypes.STRING,
             allowNull : false
         },
         email : {
            type : DataTypes.STRING,
            allowNull : false
         },
         password : {
             type : DataTypes.STRING,
             allowNull : false
         }
     })
     return User
    
 }
 module.exports = makeUserTable