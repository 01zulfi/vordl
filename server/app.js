require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const user = require("./user");
const file = require("./file");
const memo = require("./memo");
const vord = require("./vord");

require("./config/mongodb");
require("./config/cloudinary");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/user", user.route);
app.use("/v1/file", user.authenticate, file.route);
app.use("/v1/memo", user.authenticate, memo.route);
app.use("/v1/vord", user.authenticate, vord.route);

module.exports = app;
