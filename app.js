require('dotenv').config()
const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine', 'ejs')
require("./model/index")
app.use(express.json())

app.get('/', (req, res) => {
    const data = {
        name: "Nirmal Dhakal",
        age: 21,
        location: "Rampur"
    }
    res.render("home.ejs", {
        home: data
    })
})

app.get('/about', (req, res) => {
    res.send("this is about page")
})


app.use(express.static('public/css/'))


app.listen(3000, () => {
    console.log('Node.js has been started:')
})