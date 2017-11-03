const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Result = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  first_blood: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  winningTeam: {
    type: String,
    required: true
  },
  losingTeam: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("results", Result);
