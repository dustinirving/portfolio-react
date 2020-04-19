import React from "react";
import "../../styling/ProjectDescription.css";

const Quiz = (props) => {
  return (
    <div className="project">
      <p className="header">Capitals Quiz</p>
      <div className="linksDiv">
        <a
          className="linkOne"
          href="https://github.com/dustinirving/country-capitals"
        >
          Github Repo
        </a>
        <a
          className="linkTwo"
          href="https://dustinirving.github.io/country-capitals/"
        >
          Live Site
        </a>
      </div>
      <img className="gif" src={require("../../gifs/quiz.gif")} alt="Quiz" />

      <p className="projectText">
        The COVID-19 Tracker retrieves the latest data regarding cases of
        COVID-19 and displays a graphical representation. It also provides the
        user with the most recent news updates. My role consisted of developing
        a script that would obtain the data and display it in a graph. This was
        all done with MaterializeCSS, HTML5, Javascript, Chart.js, a COVID-19
        API, and the NYT API.
      </p>
    </div>
  );
};

export default Quiz;
