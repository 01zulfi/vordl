const { ObjectId } = require("mongoose").Types;

const validObjectIdString = (string) => ObjectId.isValid(string);

module.exports = validObjectIdString;
