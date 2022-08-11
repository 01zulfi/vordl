const express = require("express");

const router = express.Router();

const controller = require("./vord-controller");

router.post("/", controller.addVord);
router.get("/:id", controller.getVord);
router.get("/user/:userId", controller.getUserVords);
router.put("/:id", controller.updateVord);
router.delete("/:id", controller.deleteVord);

module.exports = router;
