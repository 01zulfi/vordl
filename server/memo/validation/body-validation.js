const { body } = require("express-validator");
const validObjectIdString = require("../../utils/valid-objectid-string");

const bodyValidation = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("Memo title must be at least 3 characters long")
    .trim(),
  body("content").optional().trim(),
  body("creator")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid user Id."),
  body("vord")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid vord Id."),
];

module.exports = bodyValidation;
