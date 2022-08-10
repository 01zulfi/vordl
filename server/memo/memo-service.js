const Memo = require("./memo-model");
const toObjectId = require("../utils/to-objectid");

const getVordMemos = async (vordId) => Memo.find({ vord: vordId });

const addMemo = async (memoData) => {
  const memoDoc = new Memo({
    ...memoData,
    creator: toObjectId(memoData.creator),
    vord: toObjectId(memoData.vord),
  });
  await memoDoc.save();
  return memoDoc;
};

const updateMemo = async (id, memoData) => {
  const options = { returnDocument: "after", upsert: true, new: true };

  const memo = await Memo.findByIdAndUpdate(
    id,
    { ...memoData },
    options
  ).exec();
  return memo;
};

const deleteMemo = async (id) => {
  await Memo.findByIdAndRemove(id).exec();
};

module.exports = { getVordMemos, addMemo, updateMemo, deleteMemo };
