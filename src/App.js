import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Covid from './components/projects/Covid'
import Travelbook from './components/projects/Travelbook'
import Samaritan from './components/projects/Good-samaritan'
import Employee from './components/projects/Employee'

// Styling
import './styling/App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='body'>
          <div className='navbar' id='navbar' path='/portfolio' exact>
            <Navbar />
          </div>
          <Route
            path='/portfolio'
            exact
            render={props => (
              <React.Fragment>
                <div className='background'>
                  <div className='wrapper'>
                    <div className='intro'>
                      <Intro />
                    </div>
                  </div>
                  <div className='projects' id='projects'>
                    <Projects />
                  </div>

                  <div className='about' id='about'>
                    <About />
                  </div>
                </div>

                <div className='contactWrapper'>
                  <div className='contact' id='contact'>
                    <Contact />
                  </div>
                </div>
              </React.Fragment>
            )}
          ></Route>
        </div>
        <div className='projectWrapper'>
          <Route path='/portfolio/covid' component={Covid} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/portfolio/travelbook' component={Travelbook} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/portfolio/good-samaritan' component={Samaritan} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/portfolio/employee' component={Employee} exact />
        </div>
      </Router>
    )
  }
}

export default App
