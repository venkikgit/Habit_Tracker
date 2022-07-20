const mongoose = require('mongoose');
const path = require('path');
// Habit schema
const habitSchema = new mongoose.Schema({
    habit:{
        type : String,
        // unique:true
        // required:true
    },
    description:{ 
        type:String
        // required:true
    },
    frequency : {   
        type:String
        // required:true
    },
    time:{
        type:String,
        // required:true
    },
    streak:{
        type:Number,
        default:0
    },
    days:{
        one:{
            type:String,
            default:null
        },
        two:{
            type:String,
            default:null
        },
        three:{
            type:String,
            default:null
        },
        four:{
            type:String,
            default:null
        },
        five:{
            type:String,
            default:null
        },
        six:{
            type:String,
            default:null
        },
        seven:{
            type:String,
            default:null
        }
    }

},{
    timestamps:true
});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;