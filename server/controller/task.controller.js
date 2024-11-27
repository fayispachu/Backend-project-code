const Task = require("../models/task.model");

// Create and save a new task
const createTask = async (req, res) => {
  const { userTask } = req.body; // Extract the 'userTask' field from the request body
  const newTask = await Task.create({ task: userTask }); // Create a new Task in the database
  console.log(newTask); // Log the created task
  return res.status(201).json({ message: "Task created", newTask }); // Respond with a success message and the created task
};

// Retrieve all tasks
const getAllTasks = async (req, res) => {
  const tasks = await Task.find(); // Retrieve all tasks from the database
  return res.status(200).json({ tasks }); // Respond with the list of tasks
};

const deleteTask = async (req, res) => {
  console.log("Started deleteTask()");
  const id = req.query.id;
  console.log(id);
  const deleteTask = await Task.findByIdAndDelete(id);
  return res.status(200).json({ msg: "Task deleted", deleteTask });
};

const getOneTask = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const task = await Task.findById(id);
  console.log(task);
  return res.status(200).json({ task });
};

const updateTask = async (req, res) => {
  const id = req.query.id;
  const { task } = req.body;

  const update = await Task.findByIdAndUpdate(id, { task }, { new: true });
  return res.status(200).json({ message: "data updated", update });
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  getOneTask,
  updateTask,
}; // Export controller functions

// createTask:
// Extracts the userTask data sent in the request body.
// Uses Task.create() to insert a new task into the database.
// Sends a response with status 201 (created) and the new task.
// getAllTasks:
// Retrieves all documents (tasks) in the "Task" collection using Task.find().
// Sends a response with status 200 (OK) and the list of tasks.
