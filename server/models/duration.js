const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Duration = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  lessthan20min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },

  between20and30min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },

  between30and45min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },

  between45and55min: {
    fraction: {
      type: String,
      required: true
    },
    odd: {
      type: Number,
      required: true
    }
  },

  over55min: {
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

module.exports = mongoose.model('durations', Duration);
