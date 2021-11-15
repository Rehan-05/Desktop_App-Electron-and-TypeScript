const User = require('../model/userModel')


const index =(req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");

  User.find().then(response =>{
    res.json({response})
  })
  .catch(err=>{
    res.json({
      message: "Record nod Fond"+err,
    })
  })
}


const show =(req, res, next) =>{
  User.findById(req.body.userId).then(response =>{
    res.json({response})
  })
  .catch(err=>{
    res.json({
      message: "Record nod Fond"+err,
    })
  })
}


const store =(req, res, next) =>{
  let users = new User({
    name: req.body.name,
    userName:req.body.userName,
    email: req.body.email,
    password: req.body.password,
  })
  users.save().then(response =>{
    res.json({
      message: "Record Added successfully",
    })
  })
  .catch(err=>{
    res.json({
      message: "Record nod Fond"+err,
    })
  })

}


const update =(req, res, next) =>{
  let userId =req.body.userId;
  let userData = {
    name: req.body.name,
    userName:req.body.userName,
    email: req.body.email,
    password: req.body.password,
  }
  User.findByIdAndUpdate(userId,{$set: userData}).then(response =>{
    res.json({
      message: "Record Updated successfully",
    })
  })
  .catch(err=>{
    res.json({
      message: "Record nod Fond"+err,
    })
  })

}

const destroy =(req, res, next) =>{
  let userId =req.body.userId;

  User.findOneAndRemove(userId).then(response =>{
    res.json({
      message: "Record Deleted successfully",
    })
  })
  .catch(err=>{
    res.json({
      message: "Record nod Fond"+err,
    })
  })

}

module.exports ={
  index,show,store,update,destroy
}
