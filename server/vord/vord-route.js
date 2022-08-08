const express = require("express");

const router = express.Router();

const controller = require("./vord-controller");

router.post("/", controller.addVord);

module.exports = router;
