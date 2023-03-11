const Venue = require('../models/venueModel');

const venueController = {
  async getAllVenues(req, res) {
    try {
      const venues = await Venue.find();
      res.json(venues);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getVenueById(req, res) {
    try {
      const venue = await Venue.findById(req.params.id);
      if (!venue) {
        res.status(404).json({ message: 'Venue not found' });
      } else {
        res.json(venue);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createVenue(req, res) {
    try {
      const venue = new Venue(req.body);
      const newVenue = await venue.save();
      res.status(201).json(newVenue);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateVenue(req, res) {
    try {
      const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!venue) {
        res.status(404).json({ message: 'Venue not found' });
      } else {
        res.json(venue);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteVenue(req, res) {
    try {
      const venue = await Venue.findByIdAndDelete(req.params.id);
      if (!venue) {
        res.status(404).json({ message: 'Venue not found' });
      } else {
        res.json({ message: 'Venue deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = venueController;