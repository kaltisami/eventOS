const Stage = require('../models/stageModel');

const stageController = {
  getAllStages: async (req, res) => {
    try {
      const stages = await Stage.find();
      res.json(stages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getStageById: async (req, res) => {
    try {
      const stage = await Stage.findById(req.params.id);
      res.json(stage);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createStage: async (req, res) => {
    const stage = new Stage({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      capacity: req.body.capacity,
      size: req.body.size,
      equipment: req.body.equipment
    });

    try {
      const newStage = await stage.save();
      res.status(201).json(newStage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateStage: async (req, res) => {
    try {
      const stage = await Stage.findById(req.params.id);
      if (stage == null) {
        return res.status(404).json({ message: 'Stage not found' });
      }

      if (req.body.name != null) {
        stage.name = req.body.name;
      }

      if (req.body.description != null) {
        stage.description = req.body.description;
      }

      if (req.body.location != null) {
        stage.location = req.body.location;
      }

      if (req.body.capacity != null) {
        stage.capacity = req.body.capacity;
      }

      if (req.body.size != null) {
        stage.size = req.body.size;
      }

      if (req.body.equipment != null) {
        stage.equipment = req.body.equipment;
      }

      const updatedStage = await stage.save();
      res.json(updatedStage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteStage: async (req, res) => {
    try {
      const stage = await Stage.findById(req.params.id);
      if (stage == null) {
        return res.status(404).json({ message: 'Stage not found' });
      }
      await stage.remove();
      res.json({ message: 'Stage deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = stageController;