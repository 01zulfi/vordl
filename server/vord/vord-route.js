const express = require("express");
const vordBodyValidation = require("./validation/vord-body-validation");
const validation = require("../utils/validation");

const router = express.Router();

const controller = require("./vord-controller");

router.post(
  "/",
  vordBodyValidation,
  validation.errorHandler,
  controller.addVord
);
router.get(
  "/:vordId",
  validation.param.vordId,
  validation.errorHandler,
  controller.getVord
);
router.get(
  "/user/:userId",
  validation.param.userId,
  validation.errorHandler,
  controller.getUserVords
);
router.put(
  "/:vordId",
  validation.param.vordId,
  validation.errorHandler,
  controller.updateVord
);
router.delete(
  "/:vordId",
  validation.param.vordId,
  validation.errorHandler,
  controller.deleteVord
);

module.exports = router;
