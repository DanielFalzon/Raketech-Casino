import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "react-bootstrap";

function DesktopNav() {
  return (
    <div>
      <Navbar className="bg-secondary p-4">
        <NavbarBrand>
          <img
            src={require("../resources/images/raketech-logo.png")}
            className="navbar-brand"
            alt="logo"
            width="200"
          />
        </NavbarBrand>

        <Navbar.Collapse className="justify-content-end font-weight-bolder">
          <Navbar.Text className="px-4 active border-bottom border-primary">
            <Link to="/" style={{textDecoration: 'none'}}>HOME</Link>
          </Navbar.Text>
          <Navbar.Text className="px-4">
            <Link to="/about" style={{textDecoration: 'none'}}>ABOUT US</Link>
          </Navbar.Text>
          <Navbar.Text className="pl-4">
            <Link to="/contact-us" style={{textDecoration: 'none'}}>CONTACT US</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default DesktopNav;
