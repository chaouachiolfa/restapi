const express = require('express')
const db = require('./config/db')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT

// database
db()

// middlewares
app.use(express.json())
app.use('/api/user' , require('./routes/userRoute'))




// server
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})