const mongoose = require("mongoose");

const { Schema } = mongoose;

const MemoSchema = new Schema(
  {
    title: String,
    content: String,
    creator: { type: Schema.ObjectId, ref: "User" },
    vord: { type: Schema.ObjectId, ref: "Vord" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Memo", MemoSchema);
