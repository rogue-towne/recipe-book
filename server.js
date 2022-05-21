const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()




const port = 3000;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const router = require('./routes/index')

//This always needs to be put before app.use('/', router), or you'll get a type error.
app.use(express.json())
app.use('/', router)
