const mongoose = require("mongoose");

const db =require("../model")

const {UserSchema} =db.user

const Organizations = mongoose.model(
  "organization",
  new mongoose.Schema({
    organizationName: {type:String,required:true},
    description: {type:String},
    owner: {type:mongoose.Schema.Types.ObjectId,ref:"User"},
    logo: {type:String},
    address: {type:String},
    // projects: String,
    Members: [{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
  },{timestamps:true})
);

module.exports = Organizations;
