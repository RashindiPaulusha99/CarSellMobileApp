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
    fuelType:{
        type:String,
        required:true
    },
    seats:{
        type:String,
        required:true
    },
    transmissionType:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    distance:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Car',carSchema)