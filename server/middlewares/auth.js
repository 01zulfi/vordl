const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      res.status(401).json({ message: "user must be logged in." });
    }

    const payload = await jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(payload.userId);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = isAuthenticated;
