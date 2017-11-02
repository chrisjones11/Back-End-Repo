const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Duration = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  bet_type: {
    type: String,
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
    },
    low: {
      type:Number,
      require:true
    },
    high: {
      type: Number,
      require: true
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
    },
    low: {
      type:Number,
      require:true
    },
    high: {
      type: Number,
      require: true
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
    },
    low: {
      type:Number,
      require:true
    },
    high: {
      type: Number,
      require: true
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
    },
    low: {
      type:Number,
      require:true
    },
    high: {
      type: Number,
      require: true
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
    },
    low: {
      type:Number,
      require:true
    },
    high: {
      type: Number,
      require: true
    }
  }
});

module.exports = mongoose.model('durations', Duration);
