const express = require("express");
const memoValidation = require("./validation");

const router = express.Router();

const controller = require("./memo-controller");

router.get(
  "/vord/:vordId",
  memoValidation.param,
  memoValidation.errorHandler,
  controller.getVordMemos
);
router.post(
  "/",
  memoValidation.body,
  memoValidation.errorHandler,
  controller.addMemo
);
router.put(
  "/:memoId",
  memoValidation.body,
  memoValidation.param,
  memoValidation.errorHandler,
  controller.updateMemo
);
router.delete(
  "/:memoId",
  memoValidation.param,
  memoValidation.errorHandler,
  controller.deleteMemo
);

module.exports = router;
