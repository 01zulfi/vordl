const { body } = require("express-validator");
const validObjectIdString = require("../../utils/valid-objectid-string");

const vordBodyValidation = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Vord title must be at least 3 characters long.")
    .trim(),
  body("description").optional().trim(),
  body("creator")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid user Id."),
];

module.exports = vordBodyValidation;
