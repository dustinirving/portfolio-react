import React from "react";
import "../../styling/ProjectDescription.css";

const Planner = (props) => {
  return (
    <div className="planner">
      <p className="header">Day Planner</p>
      <div className="linksDiv">
        <a
          className="linkOne"
          href="https://github.com/dustinirving/daily-planner"
        >
          Github Repo
        </a>
        <a
          className="linkTwo"
          href="https://dustinirving.github.io/daily-planner/"
        >
          Live Site
        </a>
      </div>
      <img
        className="gif"
        src={require("../../gifs/planner.gif")}
        alt="Planner"
      />

      <p className="projectText">
        In this program, a user can enter their daily activities into a day
        planner, which they can then save to record important events throughout
        their day. To develop this application, I used Bootstrap and HTML for
        the front end and javascript to make the elements interactive.
      </p>
    </div>
  );
};

export default Planner;
