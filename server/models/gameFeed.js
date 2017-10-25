const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameFeed = new Schema({
  embedded_game: {
    type: String,
    required: true
  },
  team_radiant: {
    type: String,
    required: true
  },
  team_radiant_thumb: {
    type: String,
    require: true
  },
  team_dire: {
    type: String,
    required: true
  },
  team_dire_thumb: {
    type: String,
    required: true
  },
  match_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("gameFeeds", GameFeed);
