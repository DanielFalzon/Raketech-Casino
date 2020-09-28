import React from "react";
import { Link } from "react-router-dom";

function MobileNavMenu(props) {
  return (
    <ul className="list-group list-group-flush">
      <li className="bg-transparent list-group-item">
        <Link
          onClick={props.closeMenu}
          to="/"
          className="py-3 text-white d-block text-center"
        >
          Home
        </Link>
      </li>

      <li className="bg-transparent list-group-item">
        <Link
          onClick={props.closeMenu}
          to="/about"
          className="py-3 text-white d-block text-center"
        >
          About
        </Link>
      </li>

      <li className="bg-transparent list-group-item">
        <Link
          onClick={props.closeMenu}
          to="/contact-us"
          className="py-3 text-white d-block text-center"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default MobileNavMenu;
