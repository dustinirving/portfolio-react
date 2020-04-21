import React from "react";
import Dustin from "../images/dustin.jpg";
import "../styling/App.css";

const Intro = (props) => {
  return (
    <div className="introComponent">
      <div>
        <img
          className="introImage"
          src={Dustin}
          style={introImage}
          alt="Dustin"
        />
      </div>
      <div className="introText" style={introText}>
        <p>
          Hello and welcome. <br />
          I'm Dustin, a Full Stack Web Developer. <br />
          Check out my work below.
          <br />
        </p>
      </div>
    </div>
  );
};

// Styling

const introImage = {
  borderRadius: "50%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "0 0 20px black",
};

const introText = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  fontWeight: "900",
  marginTop: "10%",
  paddingTop: "1.5rem",
  paddingBottom: "0.1rem",
  borderRadius: "3%",
  marginBottom: "0",
  color: "black",
  backgroundColor: "white",
  boxShadow: "0 0 20px black",
};

export default Intro;
