import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppNav } from "./components/AppNav.jsx";
import { Flights, Home, Error, CreateFlight } from "./pages";

import { Update } from "./components/Update";
import { FlightControl } from "./pages/FlightControl";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="*" element={<Error />} />
          <Route path="/CreateFlight" element={<CreateFlight />} />
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/FlightControl" element={<FlightControl />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
