const express = require("express");
const userBodyValidation = require("./validation/user-body-validation");
const validation = require("../utils/validation");
const authenticate = require("./authentication/authenticate");

const router = express.Router();

const controller = require("./user-controller");

router.post(
  "/register",
  userBodyValidation,
  validation.errorHandler,
  controller.register
);
router.post(
  "/login",
  (req, res, next) => {
    console.log(req);
    next();
  },
  userBodyValidation,
  validation.errorHandler,
  controller.login
);
router.get("/", authenticate, controller.getUser);
router.post(
  "/",
  authenticate,
  userBodyValidation,
  validation.errorHandler,
  controller.updateUser
);
router.post(
  "/password",
  authenticate,
  userBodyValidation,
  validation.errorHandler,
  controller.updateUserPassword
);

module.exports = router;
