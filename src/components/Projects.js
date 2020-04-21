import React from "react";
import Project from "./Project";
import "../styling/Projects.css";
import { Link } from "react-router-dom";

// Images
import covid from "../images/covid.jpg";
import planner from "../images/dayplanner.jpg";
import quiz from "../images/capitals.png";
import weather from "../images/weather.png";

const Projects = (props) => {
  return (
    <div className="projects-wrapper">
      <div className="projects-title">Recent Projects</div>
      <div className="project-card project-1">
        <Link to="/react-portfolio/covid">
          <Project title="Covid" />
          <img className="image-style" src={covid} alt="covid" />
          <h2 className="overlay-text">COVID-19 Tracker</h2>
        </Link>
      </div>

      <div className="project-card project-2">
        <Link to="/react-portfolio/planner">
          <Project title="Planner" />
          <img className="image-style" src={planner} alt="planner" />
          <h2 className="overlay-text">Day Planner</h2>
        </Link>
      </div>

      <div className="project-card project-3">
        <Link to="/react-portfolio/quiz">
          <Project title="Quiz" />
          <img className="image-style" src={quiz} alt="quiz" />
          <h2 className="overlay-text">Capitals Quiz</h2>
        </Link>
      </div>

      <div className="project-card project-4">
        <Link to="/react-portfolio/weather">
          <Project title="Weather" />
          <img className="image-style" src={weather} alt="weather" />
          <h2 className="overlay-text">Weather Dashboard</h2>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
