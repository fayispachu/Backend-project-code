const exrpess = require("express"); // Import Express (typo: should be "express")
const app = exrpess(); // Initialize Express app
const cors = require("cors"); // Enable Cross-Origin Resource Sharing
const mongoose = require("mongoose"); // Import Mongoose to connect to MongoDB
const taskRouter = require("./routes/taskRoute"); // Import task routes
require("dotenv").config(); // Load environment variables from .env file

app.use(cors()); // Allow cross-origin requests
app.use(exrpess.json()); // Parse JSON request bodies (typo: should be "express")

app.use("/api/task", taskRouter); // Use task routes under the /api/task path

mongoose
  .connect(process.env.CONN_STRING) // Connect to MongoDB using the connection string
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(3000, () => {
  console.log("server running on http://localhost:3000/");
});
