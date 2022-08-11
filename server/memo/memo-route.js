const express = require("express");
const memoBodyValidation = require("./validation/memo-body-validation");
const validation = require("../utils/validation");

const router = express.Router();

const controller = require("./memo-controller");

router.get(
  "/vord/:vordId",
  validation.param.vordId,
  validation.errorHandler,
  controller.getVordMemos
);
router.post(
  "/",
  memoBodyValidation,
  validation.errorHandler,
  controller.addMemo
);
router.put(
  "/:memoId",
  memoBodyValidation,
  validation.param.memoId,
  validation.errorHandler,
  controller.updateMemo
);
router.delete(
  "/:memoId",
  validation.param.memoId,
  validation.errorHandler,
  controller.deleteMemo
);

module.exports = router;
