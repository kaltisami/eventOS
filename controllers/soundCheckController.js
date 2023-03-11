const SoundCheck = require('../models/soundCheckModel');

const soundCheckController = {};

soundCheckController.getAllSoundChecks = async (req, res) => {
  try {
    const soundChecks = await SoundCheck.find();
    res.status(200).json(soundChecks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

soundCheckController.getSoundCheckById = async (req, res) => {
  try {
    const soundCheck = await SoundCheck.findById(req.params.id);
    if (!soundCheck) {
      res.status(404).json({ message: 'Sound check not found' });
      return;
    }
    res.status(200).json(soundCheck);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

soundCheckController.createSoundCheck = async (req, res) => {
  const soundCheck = new SoundCheck(req.body);
  try {
    const newSoundCheck = await soundCheck.save();
    res.status(201).json(newSoundCheck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

soundCheckController.updateSoundCheck = async (req, res) => {
  try {
    const soundCheck = await SoundCheck.findById(req.params.id);
    if (!soundCheck) {
      res.status(404).json({ message: 'Sound check not found' });
      return;
    }
    Object.assign(soundCheck, req.body);
    const updatedSoundCheck = await soundCheck.save();
    res.status(200).json(updatedSoundCheck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

soundCheckController.deleteSoundCheck = async (req, res) => {
  try {
    const soundCheck = await SoundCheck.findByIdAndDelete(req.params.id);
    if (!soundCheck) {
      res.status(404).json({ message: 'Sound check not found' });
      return;
    }
    res.status(200).json({ message: 'Sound check deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = soundCheckController;
