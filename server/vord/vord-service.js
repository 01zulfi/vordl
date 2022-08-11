const mongoose = require("mongoose");
const Vord = require("./vord-model");

const addVord = async ({ name, description, creator }) => {
  const vordDoc = new Vord({
    name,
    description,
    creator: mongoose.Types.ObjectId(creator),
  });
  await vordDoc.save();
  return vordDoc;
};

const getVordById = async (id) => Vord.findById(id).populate("creator");

const getUserVords = async (userId) => Vord.find({ creator: userId });

const updateVord = async (id, vordData) => {
  const options = { returnDocument: "after", upsert: true, new: true };

  const vord = await Vord.findByIdAndUpdate(
    id,
    { ...vordData },
    options
  ).exec();
  return vord;
};

const deleteVord = async (id) => Vord.findByIdAndRemove(id).exec();

const provideAccess = async ({ userId, vordId }) => {
  await Vord.findByIdAndUpdate(vordId, {
    $push: { access: userId },
  }).exec();
};

const removeAccess = async ({ userId, vordId }) => {
  await Vord.findByIdAndUpdate(vordId, { $pull: { access: userId } }).exec();
};

module.exports = {
  addVord,
  getVordById,
  getUserVords,
  updateVord,
  deleteVord,
  provideAccess,
  removeAccess,
};
