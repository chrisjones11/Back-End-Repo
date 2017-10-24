const express = require("express");
const app = express();
const APIKEY = process.env.Key;
const fs = require("fs");
const axios = require("axios");
const { json } = require("body-parser");
const config = require("./config");
const db = config.DB[process.env.NODE_ENV] || process.env.DB;

app.use(json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

module.exports = app;
