const { body } = require("express-validator");
const validObjectIdString = require("../../utils/valid-objectid-string");

const accessBodyValidation = [
  body("userId")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid userId"),
];

module.exports = accessBodyValidation;
