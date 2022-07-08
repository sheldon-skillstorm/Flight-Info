import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import "./FlightTable.css";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

export const FlightTable = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/flights")
      .then((res) => setFlight(res.data));
  }, []);

  const deleteFlight = async (flightId) => {
    try {
      await axios.delete(`http://localhost:8087/flights/${flightId}`);
      Navigate(`./flights`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  const searchRefresh = async () => {
    let result = await fetch("http://localhost:8087/flights");
    result = await result.json();
    setFlight(result);
  };

  const searchHandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8087/flights/search/${key}`);
      result = await result.json();
      if (result) {
        setFlight(result);
      }
    } else {
      searchRefresh();
    }
  };

  return (
    <>
      <div className="search2">
        <label htmlFor="search-flights">Search Flights</label>
        <input
          id="search-flights"
          type=" "
          className="search-flights"
          placeholder="Search Flights"
          onChange={searchHandler}
        />
      </div>
      <div className="flight-table">
        <div id="owner-listing" class="col-lg-6">
          <table id="owner-list" class="table">
            <thead>
              <tr>
                <td>Flight Number</td>
                <td>Plane</td>
                <td>Pilot</td>
                <td>Departure Date</td>
                <td>Arrival Date</td>
                <td>Departure Time</td>
                <td>Arrival Time</td>
                <td>Departure Airport</td>
                <td>Arrival Airport</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody id="owner-list-body">
              {flight.map((flight, index) => {
                return (
                  <>
                    <tr key={flight._id}>
                      <td>{flight.FlightNumber}</td>
                      <td>{flight.Plane}</td>
                      <td>{flight.Pilot}</td>
                      <td>{flight.DepartureDate}</td>
                      <td>{flight.ArrivalDate}</td>
                      <td>{flight.DepartureTime}</td>
                      <td>{flight.ArrivalTime}</td>
                      <td>{flight.DepartureAirport}</td>
                      <td>{flight.ArrivalAirport}</td>

                      <td>
                        <div>
                          <a
                            className=""
                            href="/FlightControl"
                            onClick={() => {
                              deleteFlight(flight._id);
                            }}
                          >
                            <BsTrash />
                          </a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <Link to={"/Update/" + flight._id}>
                            <span>
                              {" "}
                              <GrUpdate />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
