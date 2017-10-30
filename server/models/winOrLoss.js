const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WinOrLoss = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  team_name: {
    type: String,
    require: true
  },
  side: {
    type: String,
    required: true
  },
  toWin: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },
  toLose: {
    fraction: {
      type: String,
      require: true
    },
    odd: {
      type: Number,
      require: true
    }
  }
});

module.exports = mongoose.model("winOrLosses", WinOrLoss);
