const userService = require("./user-service");

const COOKIE_OPTIONS = {
  secure: true,
  httpOnly: true,
  maxAge: 2592000000, // 30days
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }

    const token = await userService.register({ name, email, password });

    return res
      .cookie("token", token, COOKIE_OPTIONS)
      .status(200)
      .json({ message: "User successfully registered." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with provided email does not exist." });
    }

    const isCorrectPassword = await userService.isCorrectPassword(
      password,
      user.password
    );
    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    const token = userService.login(user._id);

    return res
      .cookie("token", token, COOKIE_OPTIONS)
      .status(200)
      .json({ message: "User successfully signed in." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
