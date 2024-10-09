const mongoose= require('mongoose');

const personSchema= new mongoose.Schema({

        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum: ['Batsman','Bowler','Allrounder'],
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        }
})
const Person= mongoose.model('Person',personSchema);
module.exports=Person;
