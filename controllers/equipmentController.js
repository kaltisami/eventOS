const Equipment = require('../models/equipmentModel');

const equipmentController = {};

equipmentController.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

equipmentController.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (equipment == null) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

equipmentController.createEquipment = async (req, res) => {
  try {
    const equipment = new Equipment(req.body);
    const newEquipment = await equipment.save();
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

equipmentController.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (equipment == null) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    equipment.name = req.body.name || equipment.name;
    equipment.type = req.body.type || equipment.type;
    equipment.description = req.body.description || equipment.description;
    equipment.quantity = req.body.quantity || equipment.quantity;

    const updatedEquipment = await equipment.save();
    res.status(200).json(updatedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

equipmentController.deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (equipment == null) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    await equipment.remove();
    res.status(200).json({ message: 'Equipment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = equipmentController;