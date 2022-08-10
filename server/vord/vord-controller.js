const vordService = require("./vord-service");
const validObjectIdString = require("../utils/valid-objectid-string");

exports.addVord = async (req, res) => {
  try {
    const { name, description, creator } = req.body;
    if (validObjectIdString(creator)) {
      const vord = await vordService.addVord({ name, description, creator });
      return res.status(200).json({ vord, message: "Vord created." });
    }
    return res.status(422).json({ message: "Invalid Id." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getVord = async (req, res) => {
  try {
    const vord = await vordService.getVordById(req.params.id);
    return res.status(200).json({ vord, message: "Vord found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getUserVords = async (req, res) => {
  try {
    const { userId } = req.params;
    if (validObjectIdString(userId)) {
      const vords = await vordService.getUserVords(userId);
      return res.status(200).json({ vords, message: "Vords found." });
    }
    return res.status(422).json({ message: "Invalid user Id." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.updateVord = async (req, res) => {
  try {
    const { name, description, access } = req.body;
    const vord = await vordService.updateVord(req.params.id, {
      name,
      description,
      access,
    });
    return res.status(200).json({ vord, message: "Vord updated." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.deleteVord = async (req, res) => {
  try {
    await vordService.deleteVord(req.params.id);
    return res.status(200).json({ message: "Vord deleted." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
