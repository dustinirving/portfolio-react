import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = (props) => {
  function changeFontColor(event) {
    event.target.style.color = "gray";
  }
  function setDefaultColor(event) {
    event.target.style.color = "white";
  }

  return (
    <div style={navbarWrapper}>
      <div style={navbarComponent}>
        <div style={navbarName}>
          <Link
            onMouseOver={changeFontColor}
            onMouseLeave={setDefaultColor}
            style={navbarNameA}
            to="/#navbar"
          >
            Dustin Irving
          </Link>
        </div>
        <div style={spacer}></div>
        <div>
          <ul style={navbarItemsUL}>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to="/#about"
                activeClassName="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to="/#projects"
                activeClassName="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to="/#contact"
                activeClassName="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styling

const navbarWrapper = {
  zIndex: "+1",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "8vh",
  lineHeight: "8vh",
  backgroundColor: "black",
};

const navbarComponent = {
  display: "flex",
};

const spacer = {
  flex: "0.97",
};

const navbarName = {
  paddingLeft: "3%",
};

const navbarNameA = {
  textDecoration: "none",
  color: "white",
  fontSize: "2rem",
};

const navbarItemsUL = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "flex",
};

const navbarItemsLI = {
  padding: "0 0.5rem",
};

const navbarItemsA = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
};

export default Navbar;
