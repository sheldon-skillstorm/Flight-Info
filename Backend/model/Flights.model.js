const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Flight Model
const flightSchema = new mongoose.Schema({
  FlightNumber: {
    type: String,
    unique: [true, "That flight number is already in use"],
    required: [true, "A flight number is missing"],
  },
  Plane: String,
  Pilot: String,
  DepartureDate: String,
  ArrivalDate: String,
  DepartureTime: String,
  ArrivalTime: String,
  DepartureAirport: String,
  ArrivalAirport: String,
});

//Export model to be used elsewhere
const Flight = mongoose.model("Flight", flightSchema, "Flights");
module.exports = Flight;
