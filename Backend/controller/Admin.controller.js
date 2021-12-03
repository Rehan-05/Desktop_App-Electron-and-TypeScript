const Organizations = require('../model/Organization.model');

const {User} = require('../model/user.model');
var bcrypt = require("bcryptjs");

exports.CreateOrganization = (req, res,next) => {
  const createNewOrganization = new Organizations({
    organizationName:req.body.organizationName,
    description:req.body.description,

    logo:req.body.logo,
    address:req.body.address,
  });
  createNewOrganization.save((err, organization)=> {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Organization."
      });
    }

     User.findByIdAndUpdate(req.body.owner,{memberOf:organization._id},{new:true},(err,USER)=>{
      if(err){
        res.status(500).send({
          message: err.message
        });
        return;
      }

      createNewOrganization.owner = USER._id;
    createNewOrganization.save((err, org)=>{
      if(err){
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Organization."
        });

      }
      res.json(org)
      return;

    })
    })



  })

};


exports.AddMembers = (req, res,next) => {
  const adduser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  adduser.save((err, user)=> {
    if (err) {
      res.status(500).send({
     message: err.message || "Some error occurred while adding members."
      });
    }
    console.log(req.body.Organizations , "   " , user._id)
    Organizations.findByIdAndUpdate(req.body.Organizations, {$push: {Members: user._id}}, {new: true}, (err, org)=> {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while adding members in the Organization."
        });
      }
      res.json(org)
  })

}
)};


