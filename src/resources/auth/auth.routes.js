const router = require("express").Router();
const authServices = require("./auth.services.js");
const authValidation = require("./auth.validation.js");
const { validateBody } = require("../../middlewares/validation.middleware.js");

router
  .route("/register")
  .post(validateBody(authValidation.register), authServices.register);
router
  .route("/login")
  .post(validateBody(authValidation.login), authServices.login);
// todo: add authentication when implemented
router.route("/logout").get(authServices.logout);

module.exports = router;