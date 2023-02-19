require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose
    .connect(process.env.MONGO_URI.toString(),{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(err => console.log(err))

const db = mongoose.connection

module.exports = db 