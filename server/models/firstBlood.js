const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FirstBlood = new Schema({
  match_id: {
    type: Number,
    required: true
  },
  bet_type: {
    type: String,
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
  between1and3min: {
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
  between3and5min: {
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
  between5and10min: {
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
  over10min: {
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

//possibly add a value for time in seconds for button useage
module.exports = mongoose.model('firstBlood', FirstBlood);
