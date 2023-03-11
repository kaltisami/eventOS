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

function createEvent(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description,
    attendees: req.body.attendees
  });

  event.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}
/*const createEvent = async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    venue: req.body.venue,
    performers: req.body.performers,
    description: req.body.description
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
    console.log(json(newEvent));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};*/

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
  deleteEvent
};
