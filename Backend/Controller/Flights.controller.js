const Flight = require("../model/Flights.model");

//Method to Create a flight
const createFlight = async ({
  FlightNumber,
  Plane,
  Pilot,
  DepartureDate,
  ArrivalDate,
  DepartureTime,
  ArrivalTime,
  DepartureAirport,
  ArrivalAirport,
}) => {
  try {
    const flight = new Flight({
      FlightNumber,
      Plane,
      Pilot,
      DepartureDate,
      ArrivalDate,
      DepartureTime,
      ArrivalTime,
      DepartureAirport,
      ArrivalAirport,
    });
    await flight.save();
    return flight._id;
  } catch (err) {
    console.log(err);
    throw { status: 400, message: err };
  }
};

//Method to find flight by ID
const findFlightById = async (id) => {
  try {
    const flight = await Flight.findById(id);
    if (flight == null) {
      throw `No flight with the id of ${id} found.`;
    }
    return flight;
  } catch (err) {
    console.error(err);
    throw { status: 404, message: err };
  }
};

//Method to find all Flights
const findAllFlights = async (limit = 0) => {
  const flights = await Flight.find();
  return flights;
};

//Method to delete a specific flight by Id
const deleteFlight = async (_id) => {
  try {
    const flightDel = await Flight.deleteOne({ _id: _id });
    if (flightDel == null) {
      throw `No flight  exists`;
    }

    return "Successful deletion";
  } catch (err) {
    console.error(err);
    throw { status: 404, message: err };
  }
};

//export methods to be used elsewhere
module.exports = {
  createFlight,
  findAllFlights,
  findFlightById,
  deleteFlight,
};
