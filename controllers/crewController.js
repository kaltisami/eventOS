const Crew = require('../models/crewModel');

const crewController = {};

crewController.getAllCrews = async (req, res) => {
  try {
    const crews = await Crew.find();
    res.status(200).json(crews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

crewController.getCrewById = async (req, res) => {
  try {
    const crew = await Crew.findById(req.params.id);
    if (!crew) {
      return res.status(404).json({ message: 'Crew not found' });
    }
    res.status(200).json(crew);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

crewController.createCrew = async (req, res) => {
  try {
    const crew = await Crew.create(req.body);
    res.status(201).json(crew);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

crewController.updateCrew = async (req, res) => {
  try {
    const updatedCrew = await Crew.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCrew) {
      return res.status(404).json({ message: 'Crew not found' });
    }
    res.status(200).json(updatedCrew);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

crewController.deleteCrew = async (req, res) => {
  try {
    const deletedCrew = await Crew.findByIdAndDelete(req.params.id);
    if (!deletedCrew) {
      return res.status(404).json({ message: 'Crew not found' });
    }
    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = crewController;
