const Flight = require("../model/Flights.model");

const createFlight = async ({
  FlightNumber,
  DepartureDate,
  ArrivalDate,
  DepartureTime,
  DepartureAirport,
  ArrivalAirport,
  CurrentNumPassengers,
  PassengerLimit,
}) => {
  try {
    const flight = new Flight({
      FlightNumber,
      DepartureDate,
      ArrivalDate,
      DepartureTime,
      DepartureAirport,
      ArrivalAirport,
      CurrentNumPassengers,
      PassengerLimit,
    });
    await flight.save();
    return flight._id;
  } catch (err) {
    console.log(err);
    throw { status: 400, message: err };
  }
};

const findAllFlights = async (limit = 0) => {
  const flights = await Flight.find();
  return flights;
};
module.exports = { createFlight, findAllFlights };
