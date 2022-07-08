import { BsPersonCircle } from "react-icons/bs";
import "./AppNav.css";
import { Link } from "react-router-dom";
export const AppNav = () => {
  return (
    <>
      {/* vertical nav component */}
      <div className="nav">
        <div className="nav-sign-in">
          <p>
            <Link to="/FlightControl" className="nav-link2">
              Sign in
            </Link>
          </p>
        </div>
        <div className="nav-icon">
          <BsPersonCircle />
        </div>
      </div>
    </>
  );
};
