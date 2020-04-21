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
        This is quiz about country capitals. The user has 60 seconds to answer 5
        questions. Based on the user's time remaining and the number of correct
        answers, a score is generated. The user can then enter their score into
        the highscores. This was developed using html, css and javascript.
      </p>
    </div>
  );
};

export default Quiz;
