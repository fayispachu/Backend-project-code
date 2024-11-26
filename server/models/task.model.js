const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task: String, // Each task will have a 'task' field of type String
});

const Task = mongoose.model("Task", taskSchema); // 'Task' is the MongoDB collection
module.exports = Task; // Export the Task model to use in other files
