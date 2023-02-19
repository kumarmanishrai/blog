const express = require('express');
const cors = require('cors');
require('dotenv').config()


const app = express();
app.use(cors({
    origins: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const db = require('./mongo/Connection')

db.on('error', console.error.bind(console, "Mongo connection error"))
db.once('open', ()=> {
    console.log(`mongo connected successfully`);
})

require('./routes/Route')(app);
app.get('/', (req, res) => {
    res.json("serrving")
})

app.listen(process.env.PORT, ()=> {
    console.log(`listening on ${process.env.PORT}`);
})