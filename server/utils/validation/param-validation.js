const { param } = require("express-validator");
const validObjectIdString = require("../valid-objectid-string");

const paramValidation = {
  memoId: param("memoId")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid memo Id in url."),
  vordId: param("vordId")
    .optional()
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid vord Id in url."),
};

module.exports = paramValidation;
