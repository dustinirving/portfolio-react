import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Home from './pages/Home'
import Covid from './pages/Covid'
import Travelbook from './pages/Travelbook'
import Samaritan from './pages/Good-samaritan'
import Employee from './pages/Employee'
import Weather from './pages/Weather'
import Transactions from './pages/Transactions'

// Styling
import './styling/App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Route path='/portfolio' exact component={Home} />
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
        <div className='projectWrapper'>
          <Route path='/portfolio/weather' component={Weather} exact />
        </div>
        <div className='projectWrapper'>
          <Route
            path='/portfolio/transactions'
            component={Transactions}
            exact
          />
        </div>
      </Router>
    )
  }
}

export default App
