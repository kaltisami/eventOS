const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
date: {
type: Date,
required: true
},
venue: {
type: String,
required: true
},
performers: {
type: [String],
required: true
},
description: {
type: String,
required: true
}
});

eventSchema.pre('remove', async function(next) {
    // remove any associated data or perform cleanup tasks
    // for example, you can remove all comments associated with the event
    await Comment.deleteMany({ event: this._id });
    next();
  });

module.exports = mongoose.model('Event', eventSchema);