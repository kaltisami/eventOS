const Ticketing = require('../models/ticketingModel');

const ticketingController = {
  async getAllTickets(req, res) {
    try {
      const tickets = await Ticketing.find();
      res.json(tickets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getTicketById(req, res) {
    const { id } = req.params;

    try {
      const ticket = await Ticketing.findById(id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json(ticket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createTicket(req, res) {
    const { ticketType, price, quantity } = req.body;

    try {
      const ticket = new Ticketing({ ticketType, price, quantity });
      const savedTicket = await ticket.save();
      res.json(savedTicket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateTicket(req, res) {
    const { id } = req.params;
    const { ticketType, price, quantity } = req.body;

    try {
      const ticket = await Ticketing.findById(id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      ticket.ticketType = ticketType;
      ticket.price = price;
      ticket.quantity = quantity;

      const savedTicket = await ticket.save();
      res.json(savedTicket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteTicket(req, res) {
    const { id } = req.params;

    try {
      const ticket = await Ticketing.findByIdAndDelete(id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = ticketingController;