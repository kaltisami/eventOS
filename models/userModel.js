const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'organizer', 'performer', 'attendee'],
    default: 'attendee'
  }
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, 'JWT_SECRET');
  return token;
};

module.exports = mongoose.model('User', UserSchema);