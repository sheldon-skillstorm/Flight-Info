import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FlightForm = () => {
  const flightNumberRef = useRef();
  const departureDateRef = useRef();
  const arrivalDateRef = useRef();
  const departureTimeRef = useRef();
  const departureAirportRef = useRef();
  const arrivalAirportRef = useRef();
  const currentNumberRef = useRef();
  const passengerNumberRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8087/flights", {
        flightNumber: flightNumberRef.current.value,
        departureDate: departureDateRef.current.value,
        arrivalDate: arrivalDateRef.current.value,
        departureTime: departureTimeRef.current.value,
        departureAirport: departureAirportRef.current.value,
        arrivalAirport: arrivalAirportRef.current.value,
        currentNumPassengers: currentNumberRef.current.value,
        passengerLimit: passengerNumberRef.current.value,
      });
      navigate("../", { replace: true });
    } catch (error) {
      console.log("Something Went Wrong");
    }
  };

  return (
    <>
      <form className="MyForm" onSubmit={handleSubmit}>
        <label htmlFor="flightNumber">Flight Number:</label>
        <div>
          <input
            id="flightNumber"
            type="text"
            placeholder="Flight Number"
            ref={flightNumberRef}
          />
        </div>

        <label htmlFor="departureDate">Departure Date:</label>
        <div>
          <input
            id="departureDate"
            type="text"
            placeholder="Departure Date"
            ref={departureDateRef}
          />
        </div>

        <label htmlFor="arrivalDate">Arrival Date:</label>
        <div>
          <input
            id="arrivalDate"
            type="text"
            placeholder="Arrival Date"
            ref={arrivalDateRef}
          />
        </div>
        <label htmlFor="departureTime">Departure Time:</label>
        <div>
          <input
            id="departureTime"
            type="text"
            placeholder="Departure Time"
            ref={departureTimeRef}
          />
        </div>
        <label htmlFor="departureAirport">Departure Airport:</label>
        <div>
          <input
            id="Departure Airport"
            type="text"
            placeholder="Departure Airport"
            ref={departureAirportRef}
          />
        </div>
        <label htmlFor="arrivalAirport">Arrival Airport:</label>
        <div>
          <input
            id="arrivalAirport"
            type="text"
            placeholder="Arrival Airport"
            ref={arrivalAirportRef}
          />
        </div>
        <label htmlFor="currentNumPassengers">
          Current Number of Passengers:
        </label>
        <div>
          <input
            id="currentNumPassengers"
            type="text"
            placeholder="Current Number of Passengers"
            ref={currentNumberRef}
          />
        </div>
        <label htmlFor="passengerLimit">Passenger Limit:</label>
        <div>
          <input
            id="passengerLimit"
            type="text"
            placeholder="Passenger Limit"
            ref={passengerNumberRef}
          />
        </div>

        <input type="submit" value="Add Flight" />
      </form>
    </>
  );
};
