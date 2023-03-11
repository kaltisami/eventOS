const mongoose = require('mongoose');

// Define the schema for the Venue model
const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  capacity: {
    type: Number,
    required: true
  },
  facilities: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Define the Venue model using the schema
const Venue = mongoose.model('Venue', venueSchema);

// Export the Venue model
module.exports = Venue;