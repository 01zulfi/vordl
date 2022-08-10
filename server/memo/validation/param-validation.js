const { param } = require("express-validator");
const validObjectIdString = require("../../utils/valid-objectid-string");

const paramValidation = [
  param("memoId")
    .optional()
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid memo Id in url."),
  param("vordId")
    .optional()
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid vord Id in url."),
];

module.exports = paramValidation;
