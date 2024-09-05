require('dotenv').config()
// const app = require('express')()
const express = require('express')
const { blogs, sequelize, users } = require('./model/index')
// const multer = require('./middleware/multerConfig').multer
// const storage = require('./middleware/multerConfig').storage
const {multer,storage,storage2,storage3} = require('./middleware/multerConfig')
const upload = multer({storage:storage})
const bcrypt = require("bcrypt")
const { homePage, singleBlog, deleteBlog, createForm, createBlog } = require('./controller/blogController')
const { registerUser, loginUser, renderRegister, renderLogin } = require('./controller/authController')


const app = express()
const blogRoute = require("./routes/blogRoute")
const authRoute = require("./routes/authRoute")

// app.use(express.json())

app.set('view engine','ejs')
require("./model/index")
app.use(express.urlencoded({extended : true}))

app.use('/', blogRoute)
app.use('/', authRoute)


app.use(express.static('public/css/'))
app.use(express.static("./storage/"))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})