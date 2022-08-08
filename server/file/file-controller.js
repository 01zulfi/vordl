const fileService = require("./file-service");

exports.getAllFiles = async (req, res) => {
  try {
    const files = await fileService.getAllFiles();
    res.status(200).json({ files });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.getFileByFilename = async (req, res) => {
  try {
    const file = await fileService.getFileByFilename(req.params.filename);
    res.status(200).json({ file });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.upload = (req, res) => {
  try {
    console.log({ "req.file": req.file });
    if (req.file) {
      fileService.uploadAndSave({
        file: req.file,
        creator: req.body.creator,
        vord: req.body.vord,
      });
    }
    res.status(200).json({ message: "File uploaded successfully." });
  } catch (err) {
    res.status(500).json({ err });
  }
};
