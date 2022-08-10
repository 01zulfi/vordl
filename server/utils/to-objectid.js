const { ObjectId } = require("mongoose").Types;

const toObjectId = (string) => ObjectId(string);

module.exports = toObjectId;
