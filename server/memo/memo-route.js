const express = require("express");

const router = express.Router();

const controller = require("./memo-controller");

router.post("/", controller.addMemo);
router.put("/:id", controller.updateMemo);

module.exports = router;
