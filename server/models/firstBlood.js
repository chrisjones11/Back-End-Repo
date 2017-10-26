const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FirstBlood = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  lessthan1min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },
  between1and3min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },
  between3and5min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },
  between5and10min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },
  over10min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model("firstBloods", FirstBlood);
