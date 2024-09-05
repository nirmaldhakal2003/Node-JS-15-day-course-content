const { blogs } = require("../model")


exports.homePage = async (req,res)=>{
    const datas = await blogs.findAll() // select * from blogs returns array 
   
    res.render("home",{blogs : datas})
 }

 exports.singleBlog = async (req,res)=>{
    const id = req.params.id
    const blog =  await blogs.findByPk(id) // returns object 

    res.render("singleBlog.ejs",{blog : blog})
}

exports.deleteBlog = async (req,res)=>{
    const id = req.params.id
    await blogs.destroy({
        where : {
            id : id
        }
    })
    res.redirect("/")
}

exports.createForm = (req,res)=>{
    res.render("create")

}

exports.createBlog = async (req,res)=>{
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

}