const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageURL: {
    type: String
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const Stage = mongoose.model('Stage', stageSchema);

module.exports = Stage;