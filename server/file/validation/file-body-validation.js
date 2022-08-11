const { body } = require("express-validator");

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
];

module.exports = fileBodyValidation;
