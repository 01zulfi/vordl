const { body } = require("express-validator");
const validObjectIdString = require("../../utils/valid-objectid-string");

const fileBodyValidation = [
  body("file")
    .custom((value, { req }) => {
      const allowedExtensions = [
        "pdf",
        "png",
        "jpg",
        "jpeg",
        "docx",
        "webp",
        "svg",
      ];
      return allowedExtensions.some((ext) => req.file.mimetype.includes(ext));
    })
    .withMessage("File type not supported."),
  body("creator")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid user Id."),
  body("vord")
    .custom((value) => validObjectIdString(value))
    .withMessage("Invalid vord Id."),
];

module.exports = fileBodyValidation;
