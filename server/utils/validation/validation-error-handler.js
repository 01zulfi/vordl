const { validationResult } = require("express-validator");

const validationErrorHandler = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ message: validationErrors.array() });
  }
  return next();
};

module.exports = validationErrorHandler;
