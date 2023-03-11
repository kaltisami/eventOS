const mongoose = require('mongoose');

const soundCheckSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  equipment: [{
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  notes: {
    type: String,
  },
});

const SoundCheck = mongoose.model('SoundCheck', soundCheckSchema);

module.exports = SoundCheck;
