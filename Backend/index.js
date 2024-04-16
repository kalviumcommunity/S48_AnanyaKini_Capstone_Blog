const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173/" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Hello, World!"));
app.get("/dbstatus", (req, res) =>
  res.json({
    status: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT || 5000}`)
    )
  )
  .catch((error) => console.error("Error connecting to MongoDB:", error));
