const { authJwt } = require("../middlewares");
const {CreateOrganization,AddMembers} = require("../controller/Admin.controller");
const { verifySignUp } = require("../middlewares");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });




  app.post("/api/createOrganization", [authJwt.verifyToken,authJwt.isAdmin], CreateOrganization);
  app.post("/api/addmembers", [authJwt.verifyToken,authJwt.isAdmin], AddMembers);

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};
