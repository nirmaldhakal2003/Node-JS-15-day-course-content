
require('dotenv').config()
// const app = require('express')()
const express = require('express')
const { blogs,sequelize } = require('./model/index')
const multer = require('./middleware/multerConfig').multer
const storage = require('./middleware/multerConfig').storage
const upload = multer({storage : storage})

const app = express()

// app.use(express.json())

app.set('view engine','ejs')
require("./model/index")
app.use(express.urlencoded({extended : true}))

app.get("/create",(req,res)=>{
    res.render("create")

})

app.post('/create',upload.single('image'),async (req,res)=>{
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle, 
        description : description
    })
    res.send("Blog added successfully")
})
app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})
