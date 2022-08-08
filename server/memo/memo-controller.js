const memoService = require("./memo-service");

exports.addMemo = async (req, res) => {
  try {
    const { title, content, creator, vord } = req.body;
    const memo = await memoService.addMemo({ title, content, creator, vord });
    res.status(200).json({ memo, message: "Memo added." });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.updateMemo = async (req, res) => {
  try {
    const { title, content, creator, vord } = req.body;
    const memo = await memoService.updateMemo(req.params.id, {
      title,
      content,
      creator,
      vord,
    });
    res.status(200).json({ memo, message: "Memo updated." });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.deleteMemo = async (req, res) => {
  try {
    await memoService.deleteMemo(req.params.id);
    res.status(200).json({ message: "Memo deleted." });
  } catch (err) {
    res.status(500).json({ err });
  }
};
