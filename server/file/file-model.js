const mongoose = require("mongoose");

const { Schema } = mongoose;

const FileSchema = new Schema(
  {
    filename: String,
    url: String,
    format: String,
    creator: { type: Schema.ObjectId, ref: "User" },
    vord: { type: Schema.ObjectId, ref: "Vord" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", FileSchema);
