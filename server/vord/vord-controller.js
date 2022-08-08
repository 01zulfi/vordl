const vordService = require("./vord-service");
const validObjectIdString = require("../utils/valid-objectid-string");

exports.addVord = async (req, res) => {
  try {
    const { name, creator } = req.body;
    if (validObjectIdString(creator)) {
      const vord = await vordService.addVord({ name, creator });
      return res.status(200).json({ vord, message: "Vord created." });
    }
    return res.status(422).json({ message: "Invalid Id." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
