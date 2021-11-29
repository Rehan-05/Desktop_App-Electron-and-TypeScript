const Organizations = require('../model/Organization.model');

exports.CreateOrganization = (req, res,next) => {
  const createNewOrganization = new Organizations({
    organizationName:req.body.organizationName,
    description:req.body.description,
    owoner:req.body.owoner,
    logo:req.body.logo,
    address:req.body.address,
  });
  createNewOrganization.save((err, organization)=> {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Organization."
      });
    } else {
      res.json(organization);
    }
  })

};


