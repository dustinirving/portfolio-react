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
        <Route path='/' exact component={Home} />
        <div className='projectWrapper'>
          <Route path='/covid' component={Covid} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/travelbook' component={Travelbook} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/good-samaritan' component={Samaritan} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/employee' component={Employee} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/weather' component={Weather} exact />
        </div>
        <div className='projectWrapper'>
          <Route path='/transactions' component={Transactions} exact />
        </div>
      </Router>
    )
  }
}

export default App
