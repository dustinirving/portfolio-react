import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Covid from "./components/Projects/Covid";
import Planner from "./components/Projects/Planner";
import Quiz from "./components/Projects/Quiz";
import Weather from "./components/Projects/Weather";

// Styling
import "./styling/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <div className="navbar" id="navbar">
            <Navbar />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <Route
            path="/"
            exact
            render={(props) => (
              <React.Fragment>
                <div className="wrapper">
                  <div className="intro">
                    <Intro />
                  </div>
                  <div className="projects" id="projects">
                    <Projects />
                  </div>

                  <div className="about" id="about">
                    <About />
                  </div>

                  <div className="contact" id="contact">
                    <Contact />
                  </div>
                </div>
              </React.Fragment>
            )}
          ></Route>
        </div>
        <div className="projectWrapper">
          <Route path="/covid" component={Covid} exact />
        </div>
        <div className="projectWrapper">
          <Route path="/planner" component={Planner} exact />
        </div>
        <div className="projectWrapper">
          <Route path="/quiz" component={Quiz} exact />
        </div>
        <div className="projectWrapper">
          <Route path="/weather" component={Weather} exact />
        </div>
      </Router>
    );
  }
}

export default App;
