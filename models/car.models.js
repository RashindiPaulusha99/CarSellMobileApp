const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Car',carSchema)