const router = require("express").Router();
const { response } = require("express");
//Import methods from controller
const {
  deleteFlight,
  createFlight,
  findAllFlights,
  findFlightById,
} = require("../Controller/Flights.controller");
//Import Model of a flight
const Flight = require("../model/Flights.model");

//Get all flights
router.get("/", async (req, res) => {
  const flights = await findAllFlights();
  res.json(flights);
});

//Post flight to DB
router.post("/", async (req, res) => {
  try {
    const flightId = await createFlight(req.body);
    res.status(201).json({ _id: flightId });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }
});

//Update specific flight route as well as the method
router.put("/:id", async (req, resp) => {
  const updateFlights = await Flight.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(updateFlights);
});

//Delete specific flight
router.delete("/:id", async (req, res) => {
  try {
    await deleteFlight(req.params.id);
    res.status(201).json(`Flight with flight number ${req.params.id}`);
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }
});

// Get flight by Id
router.get("/:id", async (req, res) => {
  try {
    const flight = await findFlightById(req.params.id);
    res.json(flight);
  } catch (err) {
    res.status(err?.status || 400).json(err);
  }
});
// Route to search for a flight as well as the method
router.get("/search/:key", async (req, resp) => {
  let result = await Flight.find({
    $or: [
      {
        FlightNumber: { $regex: req.params.key },
      },
      {
        DepartureAirport: { $regex: req.params.key },
      },
      {
        ArrivalAirport: { $regex: req.params.key },
      },
    ],
  });
  resp.send(result);
});

module.exports = router;
