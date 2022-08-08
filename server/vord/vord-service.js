const mongoose = require("mongoose");
const Vord = require("./vord-model");

const addVord = async ({ name, creator }) => {
  const vordDoc = new Vord({
    name,
    creator: mongoose.Types.ObjectId(creator),
  });
  await vordDoc.save();
  return vordDoc;
};

module.exports = { addVord };
