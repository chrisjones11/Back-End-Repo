const express = require("express");
const app = express();
const APIKEY = process.env.Key;
const fs = require("fs");
const axios = require("axios");
const { json } = require("body-parser");

app.use(json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
