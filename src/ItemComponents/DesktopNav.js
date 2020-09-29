import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand } from "react-bootstrap";

function DesktopNav() {
  const location = useLocation();

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
          <Navbar.Text className="px-4 ">
            <Link to="/" style={{textDecoration: 'none'}} className={`${location.pathname==='/'? "active-link": ""}`}>HOME</Link>
          </Navbar.Text>
          <Navbar.Text className="px-4">
            <Link to="/about" style={{textDecoration: 'none'}} className={`${location.pathname==='/about'? "active-link": ""}`}>ABOUT US</Link>
          </Navbar.Text>
          <Navbar.Text className="pl-4">
            <Link to="/contact-us" style={{textDecoration: 'none'}} className={`${location.pathname==='/contact-us'? "active-link": ""}`}>CONTACT US</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default DesktopNav;
