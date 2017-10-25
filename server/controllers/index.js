let models = require("../models/models");

function fetchHome(req, res) {
  res.send("HELLO");
}

module.exports = { fetchHome };
