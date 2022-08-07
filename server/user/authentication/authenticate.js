const jwt = require("jsonwebtoken");
const userService = require("../user-service");

const authenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      res.status(401).json({ message: "User must be logged in." });
    }

    const payload = jwt.verify(token, process.env.SECRET);
    req.user = await userService.getUserById(payload.userId);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
