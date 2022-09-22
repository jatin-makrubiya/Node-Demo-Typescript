import {Schema} from "mongoose";

const User =new Schema({
    email:{type:String,unique:true},
    // password:{}
})