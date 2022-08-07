const jwt = require("jsonwebtoken");

const generateJwt = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = generateJwt;
