import React from "react";
import "../styling/App.css";

const About = (props) => {
  return (
    <div style={aboutWrapper}>
      <h1 style={aboutHeader}>About</h1>
      <p style={aboutContent} className="aboutContent">
        My name is Dustin Irving and I'm an Ottawa based Full Stack Web
        Developer. I completed my Bachelor of Science with a Specialization in
        Biochemistry at the University of Ottawa. I also earned a certificate of
        Full Stack Development through Trilogy's coding bootcamp at Carleton
        University. I am knowledgeable in all areas of web development with
        expertise in HTML, CSS, Javascript, React.js, Node.js, Express, MYSQL,
        and MongoDB. I am a dedicated individual with exceptional problem
        solving skills and passionate about learning, creating and improving. In
        my free time, I like to read, play sports and go outdoors. I also enjoy,
        travelling and learning about new cultures. Please feel free to contact
        me with the information provided below. Thanks for visiting.
      </p>
    </div>
  );
};

// Styling

const aboutWrapper = {};

const aboutContent = {
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  boxShadow: "0 0 5px black",
  borderRadius: "1%",
  backgroundColor: "#eee",
};

const aboutHeader = {
  fontSize: "36px",
  textAlign: "center",
};

export default About;
