const { body } = require("express-validator");

const userBodyValidation = [
  body("name")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long."),
  body("email").isEmail().withMessage("Invalid email."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
  body("password-confirmation")
    .optional()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Password's don't match."),
];

module.exports = userBodyValidation;
