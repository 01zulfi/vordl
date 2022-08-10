const bodyValidation = require("./body-validation");
const paramValidation = require("./param-validation");
const validationErrorHandler = require("./validation-error-handler");

module.exports = {
  body: bodyValidation,
  param: paramValidation,
  errorHandler: validationErrorHandler,
};
