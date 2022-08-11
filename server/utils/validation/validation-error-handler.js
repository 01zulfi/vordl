const { validationResult } = require("express-validator");

const validationErrorHandler = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  return next();
};

module.exports = validationErrorHandler;
