const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.Port || 8080;
app.use(express.json());
app.use(cors());

app.use("/flights", require("./routes/Flights.router"));

app.all("*", (req, res) => {
  res.status(404).send("We don't have the resource you're looking for.");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to mongoDB");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
