import et from "../assets/et1.jpg";
import "./Error.css";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <>
      <div className="whole-page">
        <div className="error-card">
          <div className="card-interior">
            <div className="ET">
              <img src={et} className=" et-img" />
            </div>
            <div className="error-text">
              <div className="four">404</div>
              <p>Page not found</p>
              <p>Listen to ET</p>
            </div>
          </div>
          <Link to="/" className="phone-home">
            Phone Home
          </Link>
        </div>
      </div>
    </>
  );
};
