const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 5000

mongoose.connect(MONGOURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected' , () => {
    console.log("connected Successfully")
})

mongoose.connection.on('error' , (e) => {
    console.log("error in mongoose connection" , e)
})

app.use(express.json())

require('./models/user')
require('./models/post')
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

const middleWare = (req , res , next) => {
    console.log("middleWare Exexuted !!");
    next()
}

app.get('/' , middleWare , (req , res) => {
    res.send("Hello Kiddo")
})

app.get('/About' , (req , res) => {
    res.send("About Page");
})

app.listen(PORT , () => {
    console.log("Server is Running on PORT " , PORT);
})















    // app.use(middleWare);
