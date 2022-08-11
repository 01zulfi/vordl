const fileService = require("./file-service");

exports.getAllFiles = async (req, res) => {
  try {
    const files = await fileService.getAllFiles();
    return res.status(200).json({ files });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getVordFiles = async (req, res) => {
  try {
    const { vordId } = req.params;
    const files = await fileService.getVordFiles(vordId);
    return res.status(200).json({ files, message: "Files found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getFileByFilename = async (req, res) => {
  try {
    const { filename } = req.params;
    const file = await fileService.getFileByFilename(filename);
    if (!file) {
      return res.status(404).json({ message: "File not found." });
    }
    return res.status(200).json({ file });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.upload = (req, res) => {
  try {
    const { creator, vord } = req.body;
    const { file } = req;
    console.log({ "req.file": file });
    if (file) {
      fileService.uploadAndSave({
        file,
        creator,
        vord,
      });
    }
    return res.status(200).json({ message: "File uploaded successfully." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
