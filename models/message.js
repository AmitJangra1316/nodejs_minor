const mongoose = require('mongoose');
const validator= require('validator');

const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('invalid emial')
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10
    },
    message:{
        type:String,
        require:true

    },   
})

const User=mongoose.model('User',schema);

module.exports=User;