
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const wordSchema = new mongoose.Schema({

    word :{
        type:String,
        required:true
    },

    wordMeaning :{
        type:Object
        
    },


    isDeleted :{
        type:Boolean,
        default:false 

    }
})


module.exports = mongoose.model('words',wordSchema)