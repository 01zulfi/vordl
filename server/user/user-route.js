const express = require("express");
const userBodyValidation = require("./validation/user-body-validation");
const validation = require("../utils/validation");

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
  userBodyValidation,
  validation.errorHandler,
  controller.login
);

module.exports = router;
