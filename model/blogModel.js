const makeBlogTable = (sequelize,DataTypes)=>{
   const Blog = sequelize.define('blog',{
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        subtitle : {
           type : DataTypes.STRING,
           allowNull : false
        },
        discription : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        image : {
            type : DataTypes.STRING
        }
    })
    return Blog
   
}
module.exports = makeBlogTable