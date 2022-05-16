const express= require('express');
const path=require('path');
const mongoose=require('mongoose');
require("./db/conn");
const Student = require('./models/students');

const app = express();
const port = process.env.PORT || 5000 ;

app.use(express.json());

app.get('/students', async(req,res)=>{
    try {
        const studentsdata= await Student.find();
        res.send(studentsdata);
    } catch (error) {
         res.send(error);
    }
});

app.get('/students/:id', async(req,res)=>{
    try {
        const _id=req.params.id;
        const studentdata= await Student.findById(_id);
        
        if (!studentdata) {
            return res.status(404).send();
        } else {
            res.send(studentdata);
        }
    } catch (error) {
         res.send(error);
    }
})

app.post('/students', async(req,res)=>{
    try{
    const user=new Student(req.body);
    const createuser=await user.save();
    res.status(201).send(createuser);
    }catch(err){
        res.status(400).send(err);
    }
})

app.patch('/students/:id', async(req,res)=>{
    try {
        const _id= req.params.id;
        const updatedata= await Student.findByIdAndUpdate(_id, req.body , {new :true} );
        res.send(updatedata);
    } catch (err) {
        res.status(404).send(err);
    }
})

app.delete("/students/:id", async(req,res)=>{
    try {       
        const deletedata= await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            res.status(400).send();
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})