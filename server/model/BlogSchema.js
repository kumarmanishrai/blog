const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true,  
    },
    tags:{
        type: Array,
    },
    description:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('blogCollection', BlogSchema)