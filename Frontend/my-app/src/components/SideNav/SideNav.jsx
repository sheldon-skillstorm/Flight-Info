import React from "react";
import "../SideNav/SideNav.css";
import dicentra from "../SideNav/dicentra-logo.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <>
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src={dicentra} alt="" class="img-fluid rounded-circle" />
            <h1 class="text-light">
              <a href="index.html">Dicentra</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="https://twitter.com/i/flow/login" class="twitter">
                <BsTwitter />
              </a>
              <a href="https://www.facebook.com/" class="facebook">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/" class="instagram">
                <BsInstagram />
              </a>
              <a href="https://www.tiktok.com/" class="google-plus">
                <SiTiktok />
              </a>
              <a href="https://www.linkedin.com/" class="linkedin">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto active">
                  <AiFillHome /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/flights" className="nav-link scrollto">
                  <MdFlight /> <span>Flights</span>
                </Link>
              </li>
              <li>
                <Link to="/FlightControl" className="nav-link scrollto">
                  <GiConsoleController /> <span>Flight Control</span>
                </Link>
              </li>
              <li>
                <Link to="/CreateFlight" className="nav-link scrollto">
                  <HiPlusCircle /> <span>Create Flight</span>
                </Link>
              </li>
            </ul>
            <footer id="footer">
              <div class="container">
                <div class="copyright">
                  <strong>
                    “Traveling the globe, making dreams come true.”
                  </strong>
                </div>
              </div>
            </footer>
          </nav>
        </div>
      </header>
    </>
  );
};
