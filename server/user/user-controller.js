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

exports.getUser = async (req, res) => {
  try {
    const { user } = req;
    return res.status(200).json({ user, message: "User found." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;
    const updatedUser = await userService.updateUser(user._id, { name, email });
    return res
      .status(200)
      .json({ user: updatedUser, message: "User updated." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const { user } = req;
    const { password } = req.body;
    const updatedUser = await userService.updateUserPassword(
      user._id,
      password
    );
    return res
      .status(200)
      .json({ user: updatedUser, message: "User's password updated." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
