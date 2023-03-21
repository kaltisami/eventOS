const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  stage: { type: mongoose.Schema.Types.ObjectId, ref: "Stage", required: true },
  performances: [{ type: mongoose.Schema.Types.ObjectId, ref: "Performance" }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
