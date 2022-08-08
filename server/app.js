require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const user = require("./user");
const file = require("./file");
const memo = require("./memo");

require("./config/mongodb");
require("./config/cloudinary");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", user.route);
app.use("/file", user.authenticate, file.route);
app.use("/memo", user.authenticate, memo.route);

module.exports = app;
