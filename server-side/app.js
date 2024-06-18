const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./config/dbConfig");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

mongoose
  .connect(dbConfig.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Connection error", err.message);
  });
