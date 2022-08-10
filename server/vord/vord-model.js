const mongoose = require("mongoose");

const { Schema } = mongoose;

const VordSchema = new Schema(
  {
    name: String,
    description: String,
    creator: { type: Schema.ObjectId, ref: "User" },
    access: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vord", VordSchema);
