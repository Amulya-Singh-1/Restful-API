const mongoose=require('mongoose');
const validator=require('validator');

const studentSchema= mongoose.Schema({
    name:{
        type: String,
        required:true,
        minLength:3
    },
    email:{
        type: String,
        required:true,
        minLength:10,
        unique:[true , "the email is already registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    phone:{
        type: Number,
        required:true,
        minLength:10,
        unique:true
    },
    address:{
        type: String,
        required:true,
        minLength:5,
        maxLength:40
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;