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

// app.use(express.json())

app.set('view engine','ejs')
require("./model/index")
app.use(express.urlencoded({extended : true}))

app.get("/",homePage)

app.get("/blog/:id",singleBlog)

app.get("/delete/:id",deleteBlog)


app.get("/create",createForm)


app.post('/create',upload.single('image') ,createBlog)


app.get("/register",renderRegister)

app.post("/register",registerUser)

app.get("/login",renderLogin)

app.post("/login",loginUser)




app.use(express.static('public/css/'))
app.use(express.static("./storage/"))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})