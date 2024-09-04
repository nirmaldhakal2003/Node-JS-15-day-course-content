


exports.registerUser = async (req,res)=>{
    const {username,email,password} = req.body
    console.log(req.body)
    await users.create({
        username , 
        email, 
        password : bcrypt.hashSync(password,8)
    })
    res.redirect("/login")
}

exports.loginUser = async (req,res)=>{
    const {email,password} = req.body
    // check whether that email exist or not in users table 
   const data = await users.findAll({
        where : {
            email : email
        }
    })
    if(data.length ==0){
        res.send("No user with that email")
    }else{
        // now check password 
       const isMatched =  bcrypt.compareSync(password,data[0].password)
       if(isMatched){
        res.send("Logged in success")
       }else{
        res.send("Invalid password")
       }
    }
    
}

exports.renderRegister = (req,res)=>{
    res.render("register")
}

exports.renderLogin = (req,res)=>{
    res.render("login")
}