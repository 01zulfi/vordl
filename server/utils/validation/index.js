const paramValidation = require("./param-validation");
const validationErrorHandler = require("./validation-error-handler");

module.exports = {
  errorHandler: validationErrorHandler,
  param: paramValidation,
};
