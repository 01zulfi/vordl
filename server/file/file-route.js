const express = require("express");
const multerUploads = require("./multer/multer");
const fileBodyValidation = require("./validation/file-body-validation");
const validation = require("../utils/validation");

const router = express.Router();

const controller = require("./file-controller");

router.get("/", controller.getAllFiles);
router.get(
  "/vord/:vordId",
  validation.param.vordId,
  validation.errorHandler,
  controller.getVordFiles
);
router.get("/:filename", controller.getFileByFilename);
router.post(
  "/upload",
  multerUploads.single("file"),
  fileBodyValidation,
  validation.errorHandler,
  controller.upload
);

module.exports = router;
