import React from "react";
import { Link, useLocation } from "react-router-dom";

function MobileNavMenu(props) {
  const location = useLocation();

  return (
    <ul className="list-group list-group-flush">
      <li className="bg-transparent list-group-item">
        <Link
          onClick={props.closeMenu}
          to="/"
          className={`nav-link py-3 d-block text-center ${
            location.pathname === "/" ? "text-secondary" : " text-white"
          }`}
        >
          Home
        </Link>
      </li>
      <li className="bg-transparent list-group-item ">
        <Link
          onClick={props.closeMenu}
          to="/about"
          className={`nav-link py-3 text-white d-block text-center ${
            location.pathname === "/about" ? "text-secondary" : " text-white"
          }`}
        >
          About
        </Link>
      </li>

      <li className="bg-transparent list-group-item">
        <Link
          onClick={props.closeMenu}
          to="/contact-us"
          className={`nav-link py-3 text-white d-block text-center ${
            location.pathname === "/contact-us" ? "text-secondary" : " text-white"
          }`}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default MobileNavMenu;
