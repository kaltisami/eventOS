const Performance = require('../models/performanceModel');

const performanceController = {};

performanceController.getAllPerformances = async (req, res) => {
try {
const performances = await Performance.find();
res.status(200).json(performances);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

performanceController.getPerformanceById = async (req, res) => {
try {
const performance = await Performance.findById(req.params.id);
if (!performance) {
return res.status(404).json({ message: 'Performance not found' });
}
res.status(200).json(performance);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

performanceController.createPerformance = async (req, res) => {
const performance = new Performance({
title: req.body.title,
date: req.body.date,
venue: req.body.venue,
artist: req.body.artist,
crew: req.body.crew,
equipment: req.body.equipment,
soundCheck: req.body.soundCheck,
tasks: req.body.tasks
});
try {
const newPerformance = await performance.save();
res.status(201).json(newPerformance);
} catch (err) {
res.status(400).json({ message: err.message });
}
};

performanceController.updatePerformance = async (req, res) => {
try {
const updatedPerformance = await Performance.findByIdAndUpdate(
req.params.id,
{
title: req.body.title,
date: req.body.date,
venue: req.body.venue,
artist: req.body.artist,
crew: req.body.crew,
equipment: req.body.equipment,
soundCheck: req.body.soundCheck,
tasks: req.body.tasks
},
{ new: true }
);
if (!updatedPerformance) {
return res.status(404).json({ message: 'Performance not found' });
}
res.status(200).json(updatedPerformance);
} catch (err) {
res.status(400).json({ message: err.message });
}
};

performanceController.deletePerformance = async (req, res) => {
try {
const deletedPerformance = await Performance.findByIdAndDelete(req.params.id);
if (!deletedPerformance) {
return res.status(404).json({ message: 'Performance not found' });
}
res.status(200).json(deletedPerformance);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

module.exports = performanceController;