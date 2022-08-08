const express = require("express");
const multerUploads = require("./utils/multer");

const router = express.Router();

const controller = require("./file-controller");

router.get("/", controller.getAllFiles);
router.post("/upload", multerUploads, controller.upload);

module.exports = router;
