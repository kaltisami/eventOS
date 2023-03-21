const Event = require('../models/eventModel');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEvent = async (req, res, next) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    venue: req.body.venue,
    performers: req.body.performers,
    description: req.body.description
  });
  try {
    const newEvent = await event.save();
    req.newEvent = newEvent; // store the new event in the request object
    next(); // move to the next middleware function
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const logEvent = (req, res) => {
  console.log(req.newEvent); // log the new event
  res.status(201).json(req.newEvent); // send the response
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    event.name = req.body.name || event.name;
    event.date = req.body.date || event.date;
    event.venue = req.body.venue || event.venue;
    event.performers = req.body.performers || event.performers;
    event.description = req.body.description || event.description;
    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.remove();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  logEvent
};
