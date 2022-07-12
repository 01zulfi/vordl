const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields must be filled." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "30d",
    });

    return res
      .cookie("token", token, {
        secure: true,
        httpOnly: true,
      })
      .status(200)
      .json({ message: "User successfully registered." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields must be filled." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with provided email does not exist." });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "30d",
    });
    console.log(token);

    return res
      .cookie("token", token, {
        secure: true,
        httpOnly: true,
      })
      .status(200)
      .json({ message: "User successfully signed in." });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
