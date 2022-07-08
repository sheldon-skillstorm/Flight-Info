import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Update.css";
import { SideNav } from "../SideNav";
import React from "react";

export const Update = () => {
  const [FlightNumber, setFlightNumber] = React.useState("");
  const [Plane, setPlane] = React.useState("");
  const [Pilot, setPilot] = React.useState("");
  const [DepartureDate, setDepartureDate] = React.useState("");
  const [ArrivalDate, setArrivalDate] = React.useState("");
  const [DepartureTime, setDepartureTime] = React.useState("");
  const [ArrivalTime, setArrivalTime] = React.useState("");
  const [DepartureAirport, setDepartureAirport] = React.useState("");
  const [ArrivalAirport, setArrivalAirport] = React.useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getFlightDetails();
  }, []);

  const getFlightDetails = async () => {
    let result = await fetch(`http://localhost:8087/flights/${params.id}`);
    result = await result.json();
    setFlightNumber(result.FlightNumber);
    setPlane(result.Plane);
    setPilot(result.Pilot);
    setDepartureDate(result.DepartureDate);
    setArrivalDate(result.ArrivalDate);
    setDepartureTime(result.DepartureTime);
    setArrivalTime(result.ArrivalTime);
    setDepartureAirport(result.DepartureAirport);
    setArrivalAirport(result.ArrivalAirport);
  };

  const updateFlight = async () => {
    let result = await fetch(`http://localhost:8087/flights/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        FlightNumber,
        Plane,
        Pilot,
        DepartureDate,
        ArrivalDate,
        DepartureTime,
        ArrivalTime,
        DepartureAirport,
        ArrivalAirport,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    if (result) {
      navigate("/FlightControl");
    }
  };

  return (
    <>
      <SideNav />

      <div className="Create-flight">
        <div className="Container-fluid">
          <div class="row">
            <form className="MyForm ">
              <label htmlFor="flightNumber">Flight Number:</label>
              <div>
                <input
                  id="flightNumber"
                  type="text"
                  value={FlightNumber}
                  onChange={(e) => {
                    setFlightNumber(e.target.value);
                  }}
                />
                <br />
              </div>

              <label htmlFor="Plane">Plane:</label>
              <div>
                <input
                  id="Plane"
                  type="text"
                  value={Plane}
                  onChange={(e) => {
                    setPlane(e.target.value);
                  }}
                />
              </div>

              <label htmlFor="Pilot">Pilot:</label>
              <div>
                <input
                  id="Pilot"
                  type="text"
                  value={Pilot}
                  onChange={(e) => {
                    setPilot(e.target.value);
                  }}
                />
              </div>

              <div class=" col-lg-6">
                <label htmlFor="DepartureDate">Departure Date:</label>
                <div>
                  <input
                    id="DepartureDate"
                    type="date"
                    value={DepartureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                    }}
                  />
                </div>

                <label htmlFor="ArrivalDate">Arrival Date:</label>
                <div>
                  <input
                    id="ArrivalDate"
                    type="date"
                    value={ArrivalDate}
                    onChange={(e) => {
                      setArrivalDate(e.target.value);
                    }}
                  />
                </div>
              </div>

              <label htmlFor="DepartureTime">Departure Time: </label>
              <div>
                <input
                  id="DepartureTime"
                  type="time"
                  value={DepartureTime}
                  onChange={(e) => {
                    setDepartureTime(e.target.value);
                  }}
                />
              </div>

              <label htmlFor="ArrivalTime">Arrival Time: </label>
              <div>
                <input
                  id="ArrivalTime"
                  type="time"
                  value={ArrivalTime}
                  onChange={(e) => {
                    setArrivalTime(e.target.value);
                  }}
                />
              </div>

              <label htmlFor="DepartureAirport">Departure Airport:</label>
              <div>
                <input
                  id="DepartureAirport"
                  type="text"
                  value={DepartureAirport}
                  onChange={(e) => {
                    setDepartureAirport(e.target.value);
                  }}
                />
              </div>

              <label htmlFor=" ArrivalAirport">Arrival Airport: </label>
              <div>
                <input
                  id=" ArrivalAirport"
                  type="text"
                  value={ArrivalAirport}
                  onChange={(e) => {
                    setArrivalAirport(e.target.value);
                  }}
                />
              </div>

              <Button onClick={updateFlight} className="btn">
                Update Flight
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
