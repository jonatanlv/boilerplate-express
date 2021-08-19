var express = require("express");
const dotenv = require("dotenv");
var app = express();

dotenv.config();

const { MESSAGE_STYLE } = process.env;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  const message = MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";

  res.json({ message: message });
});

module.exports = app;
