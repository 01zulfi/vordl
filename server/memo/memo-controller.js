const memoService = require("./memo-service");

exports.getVordMemos = async (req, res) => {
  try {
    const { vordId } = req.params;
    const memos = await memoService.getVordMemos(vordId);
    return res.status(200).json({ memos, message: "Memos found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.addMemo = async (req, res) => {
  try {
    const { title, content, creator, vord } = req.body;
    const memo = await memoService.addMemo({ title, content, creator, vord });
    return res.status(200).json({ memo, message: "Memo added." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.updateMemo = async (req, res) => {
  try {
    const { title, content, creator, vord } = req.body;
    const { memoId } = req.params;
    const memo = await memoService.updateMemo(memoId, {
      title,
      content,
      creator,
      vord,
    });
    return res.status(200).json({ memo, message: "Memo updated." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.deleteMemo = async (req, res) => {
  try {
    const { memoId } = req.params;
    await memoService.deleteMemo(memoId);
    return res.status(200).json({ message: "Memo deleted." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
