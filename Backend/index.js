const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => res.send("Hello, World!"));

// Endpoint to check MongoDB connection status
app.get("/dbstatus", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({ status: isConnected ? "Connected" : "Disconnected" });
});
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT || 5000}`)
    )
  )
  .catch((error) => console.error("Error connecting to MongoDB:", error));
