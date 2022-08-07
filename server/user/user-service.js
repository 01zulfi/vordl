const bcrypt = require("bcryptjs");
const generateJwt = require("./authentication/generate-jwt");
const User = require("./user-model");

const getUserByEmail = async (email) => User.findOne({ email });

const getUserById = async (id) => User.findById(id);

const register = async ({ name, email, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userDoc = new User({
    name,
    email,
    password: hashedPassword,
  });
  await userDoc.save();

  const token = generateJwt(userDoc._id);
  return token;
};

const login = (userId) => generateJwt(userId);

const isCorrectPassword = async (passwordToMatch, userPassword) =>
  bcrypt.compare(passwordToMatch, userPassword);

module.exports = {
  getUserByEmail,
  getUserById,
  register,
  login,
  isCorrectPassword,
};
