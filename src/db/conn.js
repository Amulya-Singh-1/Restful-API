// const res = require('express/lib/response');
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/apidb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log("yea connected to mongodb")
}).catch((err)=>{
    console.log("not connected");
    res.status(501).send("uh oh we got an error")
});