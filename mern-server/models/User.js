import mongoose from "mongoose";

const USER = [
    [1, "HOD"],
    [2, "STAFF"],
    [3, "STUDENT"],
    [4, "BRANCH"],
    [5, "ACCOUNTANT"],
    [6, "DEVELOPER"]
];
// Defining Schema
const userschema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    tc:{type:Boolean, required:true,},
    role: { type: String, default: 'STUDENT', enum: ['HOD', 'STAFF', 'STUDENT', 'BRANCH', 'ACCOUNTANT', 'DEVELOPER'], // If you want to restrict values to a specific set
    },

}) 

// crating a model for schema
const UserModel = mongoose.model("user",userschema)

export default UserModel

// aba yesko controller banaunu parxa userController.js