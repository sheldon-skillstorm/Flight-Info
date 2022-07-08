import CloudTables from "@cloudtables/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppNav } from "./features";
import { Flights, Home, Error } from "./pages";
import { FlightForm } from "./components/FlightForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="*" element={<Error />} />
          <Route path="/new-flights" element={<FlightForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
