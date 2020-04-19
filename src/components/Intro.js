import React from "react";
import Dustin from "../images/dustin.jpg";

const Intro = (props) => {
  return (
    <div style={introComponent}>
      <div>
        <img src={Dustin} style={introImage} alt="Dustin" />
      </div>
      <div style={introText}>
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

const introComponent = {
  height: "92vh",
  paddingTop: "10%",
};

const introImage = {
  borderRadius: "50%",
  height: "300px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "0 0 20px black",
};

const introText = {
  textAlign: "center",
  fontWeight: "900",
  fontSize: "24px",
  lineHeight: "40px",
  marginTop: "10%",
  paddingTop: "5%",
  paddingBottom: "1%",
  borderRadius: "3%",
  color: "black",
  backgroundColor: "white",
  boxShadow: "0 0 20px black",
};

export default Intro;
