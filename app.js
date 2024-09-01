require('dotenv').config()
// const app = require('express')()
const express = require('express')
const { blogs, sequelize } = require('./model/index')
// const multer = require('./middleware/multerConfig').multer
// const storage = require('./middleware/multerConfig').storage
const {multer,storage,storage2,storage3} = require('./middleware/multerConfig')
const upload = multer({storage:storage})


const app = express()

// app.use(express.json())

app.set('view engine','ejs')
require("./model/index")
app.use(express.urlencoded({extended : true}))

app.get("/",async (req,res)=>{
   const datas = await blogs.findAll() // select * from blogs returns array 
  
   res.render("home",{blogs : datas})
})

app.get("/blog/:id",async (req,res)=>{
    const id = req.params.id
    const blog =  await blogs.findByPk(id) // returns object 

    res.render("singleBlog.ejs",{blog : blog})
})

app.get("/delete/:id", async (req,res)=>{
    const id = req.params.id
     await blogs.destroy({
        where :{
            id : id
        }
    })
    res.redirect("/")
})


app.get("/create",(req,res)=>{
    res.render("create")

})


app.post('/create',upload.single('image') ,async (req,res)=>{
    // const title = req.body.title 
    // const subtitle = req.body.subtitle 
    // const description = req.body.description
 
   const filename = req.file.filename
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle, 
        description : description, 
        image : filename
       
    })
    res.send("Blog added successfully")

})


app.use(express.static('public/css/'))
app.use(express.static("./storage/"))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})