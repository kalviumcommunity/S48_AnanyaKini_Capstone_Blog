const express = require("express");
const cors = require("cors");
const { connect, connection } = require("mongoose");
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => res.send("Hello, World!"));

// Endpoint to check MongoDB connection status
app.get("/dbstatus", (req, res) => {
  const isConnected = connection.readyState === 1;
  res.json({ status: isConnected ? "Connected" : "Disconnected" });
});

// Connect to MongoDB
connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 5000))
  .catch((error) => console.error("Error connecting to MongoDB:", error));
