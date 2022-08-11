const vordService = require("./vord-service");

exports.addVord = async (req, res) => {
  try {
    const { name, description, creator } = req.body;
    const vord = await vordService.addVord({ name, description, creator });
    return res.status(200).json({ vord, message: "Vord created." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getVord = async (req, res) => {
  try {
    const { vordId } = req.params;
    const vord = await vordService.getVordById(vordId);
    if (!vord) {
      return res.status(404).json({ message: "Vord not found." });
    }
    return res.status(200).json({ vord, message: "Vord found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.getUserVords = async (req, res) => {
  try {
    const { userId } = req.params;
    const vords = await vordService.getUserVords(userId);
    return res.status(200).json({ vords, message: "Vords found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.updateVord = async (req, res) => {
  try {
    const { name, description, access } = req.body;
    const { vordId } = req.params;
    const vord = await vordService.updateVord(vordId, {
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
    const { vordId } = req.params;
    await vordService.deleteVord(vordId);
    return res.status(200).json({ message: "Vord deleted." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.provideAccess = async (req, res) => {
  try {
    const { userId } = req.body;
    const { vordId } = req.params;
    await vordService.provideAccess({ userId, vordId });
    return res.status(200).json({ message: "Access provided." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.removeAccess = async (req, res) => {
  try {
    const { userId } = req.body;
    const { vordId } = req.params;
    await vordService.removeAccess({ userId, vordId });
    return res.status(200).json({ message: "Access removed." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
