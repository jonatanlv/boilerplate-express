var express = require("express");
const dotenv = require("dotenv");
var app = express();

dotenv.config();

app.use("/public", express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  const message =
    process.env["MESSAGE_STYLE"] === "uppercase" ? "HELLO JSON" : "Hello json";

  res.json({ message: message });
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

module.exports = app;
