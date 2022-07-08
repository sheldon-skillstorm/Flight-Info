import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlightList.css";
import { SideNav } from "../SideNav";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

export const FlightList = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/flights")
      .then((res) => setFlight(res.data));
  }, []);

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
      <SideNav />
      <div className="search">
        <label htmlFor="search-Flights">Search Flights</label>
        <input
          id="search-Flights"
          type=" "
          className="search-flights"
          placeholder="Search Flights"
          onChange={searchHandler}
        />
      </div>

      <div className="cards-container">
        {flight.map((flight, index) => {
          return (
            <>
              <div className="card">
                <div key={flight._id}>
                  <div className="flightNumber">
                    No.<strong>{flight.FlightNumber}</strong>
                  </div>
                  <div className="plane">
                    <div>
                      <FaPlaneDeparture />
                      <strong>{flight.Plane}</strong>
                    </div>

                    <div className="pilot">
                      <GoPerson />
                      <strong>{flight.Pilot}</strong>
                    </div>
                  </div>

                  <div className="airPorts">
                    <div>
                      <strong>{flight.DepartureAirport}</strong>
                    </div>
                    <div className="arrow">
                      <AiOutlineArrowRight />
                    </div>
                    <div className="aAirport">
                      <strong>{flight.ArrivalAirport}</strong>
                    </div>
                  </div>

                  <div className="departure-arrival">
                    <div className="departure">Departure</div>
                    <div className="arrival">Arrival</div>
                  </div>
                  <div className="dates">
                    <div className="ddate">
                      <BsFillCalendarDateFill />{" "}
                      <strong> {flight.DepartureDate} </strong>
                    </div>
                    <div className="adate">
                      <BsFillCalendarDateFill />{" "}
                      <strong>{flight.ArrivalDate}</strong>
                    </div>
                  </div>
                  <div className="times">
                    <div>
                      <BsFillClockFill />{" "}
                      <strong>{flight.DepartureTime}</strong>
                    </div>
                    <div className="aTime">
                      <BsFillClockFill /> <strong>{flight.ArrivalTime}</strong>
                    </div>
                  </div>
                  <div className="foot"></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
