const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        enum:['drink','dessert','dish'],
    },
    price:{
        type:Number,
        required:true
    },
    ingridients: {
        type: Array,
        required: true,
    },

})
const Menu= mongoose.model('Menu',MenuSchema);
module.exports=Menu;