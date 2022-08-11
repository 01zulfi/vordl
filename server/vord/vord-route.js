const express = require("express");
const vordBodyValidation = require("./validation/vord-body-validation");
const accessBodyValidation = require("./validation/access-body-validation");
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
router.patch(
  "/:vordId/provide-access",
  validation.param.vordId,
  accessBodyValidation,
  validation.errorHandler,
  controller.provideAccess
);
router.patch(
  "/:vordId/remove-access",
  validation.param.vordId,
  accessBodyValidation,
  validation.errorHandler,
  controller.removeAccess
);

module.exports = router;
