const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://0.0.0.0/Backend').then(()=>
{
    console.log("db connected");
    
})

module.exports=connection;