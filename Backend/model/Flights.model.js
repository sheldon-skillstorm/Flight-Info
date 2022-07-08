const mongoose = require("mongoose");
const schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
  FlightNumber: String,
  DepartureDate: Number,
  ArrivalDate: Number,
  DepartureTime: Number,
  DepartureAirport: String,
  ArrivalAirport: String,
  CurrentNumPassengers: Number,
  PassengerLimit: Number,
});

const Flight = mongoose.model("Flight", flightSchema, "Flights");
module.exports = Flight;
