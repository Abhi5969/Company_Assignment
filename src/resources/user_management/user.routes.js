const router = require("express").Router();
const userServices = require("./user.services.js");
const userValidation = require("./user.validation.js");
const {
  validateBody,
  validateParams,
} = require("../../middlewares/validation.middleware.js");

router.route("/").get(userServices.getAllUsers);
router
  .route("/:id")
  .get(userServices.getSingleUser)
  .patch(
    validateParams(userValidation.userParams),
    validateBody(userValidation.updateUser),
    userServices.updateUser
  )
  .delete(userServices.deleteUser);

module.exports = router;