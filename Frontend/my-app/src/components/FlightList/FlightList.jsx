import axios from "axios";
import { useEffect, useState } from "react";
import CloudTables from "@cloudtables/react";
export const FlightList = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/flights")
      .then((res) => setFlight(res.data));
  }, []);

  return (
    <>
      <div>
        {flight.map((flight, index) => {
          return (
            <>
              <div key={flight._id}>
                <div>
                  Flight Number: <strong>{flight.FlightNumber}</strong>
                </div>
                <div>
                  Departure Date: <strong>{flight.DepartureDate}</strong>
                </div>
                <div>
                  Arrival Date<strong>{flight.ArrivalDate}</strong>
                </div>
                <div>
                  Departure Time: <strong>{flight.DepartureTime}</strong>
                </div>
                <div>
                  Departure Airport: <strong>{flight.DepartureAirport}</strong>
                </div>
                <div>
                  Arrival Airport: <strong>{flight.ArrivalAirport}</strong>
                </div>

                <div>
                  Current Number of passengers:
                  <strong>{flight.CurrentNumPassengers}</strong>
                </div>
                <div>
                  Passenger Limit:
                  <strong>{flight.PassengerLimit}</strong>
                </div>
                <br />
                <br />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
