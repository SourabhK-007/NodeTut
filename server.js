const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();

const personRoutes= require('../Node_2/Routes/personRoutes')
const menuRoutes = require('../Node_2/Routes/menuRoutes')

const bodyParser = require('body-parser');

app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/abc', function (req, res) {
  var obj = {
    height: 12,
    name: "sharma"
  }
  res.send(obj)
})



app.use('/person',personRoutes);
app.use('/menu',menuRoutes);
app.listen(3000)