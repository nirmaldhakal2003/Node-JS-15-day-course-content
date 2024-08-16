require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world")
    
})
 app.get('/about', (req, res) =>{
    res.send("this is about page")
 })
app.listen(3000,()=>{
    console.log('Node js has been started: ')
})