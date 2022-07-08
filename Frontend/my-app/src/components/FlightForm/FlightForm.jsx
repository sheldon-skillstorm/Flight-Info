import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlightForm.css";
//test
export const FlightForm = () => {
  const flightNumberRef = useRef();
  const planeRef = useRef();
  const pilotRef = useRef();
  const departureDateRef = useRef();
  const arrivalDateRef = useRef();
  const departureTimeRef = useRef();
  const arrivalTimeRef = useRef();
  const departureAirportRef = useRef();
  const arrivalAirportRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8087/flights", {
        FlightNumber: flightNumberRef.current.value,
        Plane: planeRef.current.value,
        Pilot: pilotRef.current.value,
        DepartureDate: departureDateRef.current.value,
        ArrivalDate: arrivalDateRef.current.value,
        DepartureTime: departureTimeRef.current.value,
        ArrivalTime: arrivalTimeRef.current.value,
        DepartureAirport: departureAirportRef.current.value,
        ArrivalAirport: arrivalAirportRef.current.value,
      });
      navigate("../FlightControl", { replace: true });
    } catch (error) {
      console.log("Somthing went wrong");
    }
  };

  return (
    <>
      <div className="create-flight">
        <div className="Container-fluid">
          <div class="row">
            <form className="MyForm ">
              <label htmlFor="flightNumber">Flight Number:</label>
              <div>
                <input
                  id="flightNumber"
                  type="text"
                  placeholder="Flight Number"
                  ref={flightNumberRef}
                />
              </div>

              <label htmlFor="plane">Plane:</label>
              <div>
                <input
                  id="plane"
                  type="text"
                  placeholder="Plane"
                  ref={planeRef}
                />
              </div>

              <label htmlFor="pilot">Pilot:</label>
              <div>
                <input
                  id="pilot"
                  type="text"
                  placeholder="Pilot"
                  ref={pilotRef}
                />
              </div>

              <div class=" col-lg-6">
                <label htmlFor="DepartureDate">Departure Date:</label>
                <div>
                  <input
                    id="DepartureDate"
                    type="date"
                    placeholder="Departure Date"
                    ref={departureDateRef}
                  />
                </div>

                <label htmlFor="ArrivalDate">Arrival Date:</label>
                <div>
                  <input
                    id="ArrivalDate"
                    type="date"
                    placeholder="Arrival Date"
                    ref={arrivalDateRef}
                  />
                </div>
              </div>

              <label htmlFor="DepartureTime">Departure Time: </label>
              <div>
                <input
                  id="DepartureTime"
                  type="time"
                  placeholder="Departure Time"
                  ref={departureTimeRef}
                />
              </div>

              <label htmlFor="ArrivalTime">Arrival Time: </label>
              <div>
                <input
                  id="ArrivalTime"
                  type="time"
                  placeholder="Arrival Time"
                  ref={arrivalTimeRef}
                />
              </div>

              <label htmlFor="DepartureAirport">Departure Airport:</label>
              <div>
                <input
                  id="DepartureAirport"
                  type="text"
                  placeholder="Departure Airport"
                  ref={departureAirportRef}
                />
              </div>

              <label htmlFor=" ArrivalAirport">Arrival Airport: </label>
              <div>
                <input
                  id=" ArrivalAirport"
                  type="text"
                  placeholder="Arrival Airport"
                  ref={arrivalAirportRef}
                />
              </div>

              <Button className="btn" onClick={handleSubmit}>
                Create Flight
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
