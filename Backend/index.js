const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const upload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use("/uploads", express.static(__dirname + "/uploads"));

const allowedOrigins = ["https://globetrottersblog.netlify.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.options("*", cors());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

app.get("/", (req, res) => res.send("Hello, World!"));
app.get("/dbstatus", (req, res) =>
  res.json({
    status: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
  })
);
app.use(notFound);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
);
