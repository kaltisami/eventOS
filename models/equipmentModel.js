const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  availability: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
