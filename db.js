const mongoose = require('mongoose');
require('dotenv').config();
//local db url
// const mongoURL='mongodb://localhost:27017/mydb'



// const mongoURL='mongodb+srv://sourabh:sour123@cluster0.gpda7.mongodb.net/'
/* Define mongoDB url in .env file*/ 
const mongoURL= process.env.DB_URL;
mongoose.connect(mongoURL,{
  
})

 /*mongoose maintain a default connection object representing 
 mongodb connection used to handle events and interact with db */
const db=mongoose.connection
db.on('connected',()=>{
    console.log('connected to mongodb server')
})
db.on('disconnected',()=>{
    console.log('mongodb server disconnected!')
})
db.on('error',(err)=>{
    console.error('mongo db connection error: '+err)
})

//export db connection
module.export=db;