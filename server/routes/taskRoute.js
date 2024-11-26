const express = require("express");
const {
  createTask,
  getAllTasks,
  deleteTask,
} = require("../controller/task.controller");

const taskRouter = express.Router();

taskRouter.post("/create", createTask); // Route to create a new task
taskRouter.get("/all", getAllTasks); // Route to get all tasks
taskRouter.delete("/delete", deleteTask);
module.exports = taskRouter; // Export the router

// Explanation:

// Router setup:
// A Router groups related routes (endpoints). Here, it handles routes for /api/task/create and /api/task/all.
// Routes:
// POST /create: Calls createTask to add a new task.
// GET /all: Calls getAllTasks to fetch all tasks.
// Exporting the router makes it available for use in the main application file.
