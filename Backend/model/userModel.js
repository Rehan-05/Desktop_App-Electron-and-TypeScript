const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type:String,

  },
  userName:{
    type:String,

  },
  email:{
    type:String,
  },
  password:{
    type:String,
  }
})
const User = mongoose.model("User", userSchema);

module.exports = User;
