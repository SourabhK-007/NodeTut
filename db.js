const mongoose = require('mongoose');
const mongoURL='mongodb://localhost:27017/mydb' //mydb is your db name
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