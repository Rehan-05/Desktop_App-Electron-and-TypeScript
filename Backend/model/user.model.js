const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  PImage: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],
  memberOf: {type: mongoose.Schema.Types.ObjectId,ref:"organization"}
})


const User = mongoose.model(
  "User",
  UserSchema
);

module.exports = {
  User,
  UserSchema
};
