const Memo = require("./memo-model");

const addMemo = async (memoData) => {
  const memoDoc = new Memo(memoData);
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

module.exports = { addMemo, updateMemo, deleteMemo };
