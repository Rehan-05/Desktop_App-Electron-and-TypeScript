const mongoose = require("mongoose");

const db =require("../model")

const {UserSchema} =db.user

const Organizations = mongoose.model(
  "organization",
  new mongoose.Schema({
    organizationName: {type:String,required:true},
    description: {type:String},
    owoner: {type:String,required:true},
    logo: {type:String,required:true},
    address: {type:String,required:true},
    // projects: String,
    // Members: [UserSchema]
  },{timestamps:true})
);

module.exports = Organizations;
