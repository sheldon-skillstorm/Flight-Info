const router = require("express").Router();
const {
  createFlight,
  findAllFlights,
} = require("../Controller/Flights.controller");

router.get("/", async (req, res) => {
  const flights = await findAllFlights();
  res.json(flights);
});

router.post("/", async (req, res) => {
  try {
    const flightId = await createFlight(req.body);
    res.status(201).json({ _id: flightId });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }
});

module.exports = router;
