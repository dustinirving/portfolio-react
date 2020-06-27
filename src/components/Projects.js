import React from 'react'
import Project from './Project'
import '../styling/Projects.css'
import { Link } from 'react-router-dom'

// Images
import covid from '../images/covid.jpg'
import travelbook from '../images/travelbook.png'
import goodsamaritan from '../images/samaritan.jpg'
import employee from '../images/employee.jpg'
import weather from '../images/weather.png'
import transactions from '../images/transactions.jpg'

const Projects = props => {
  return (
    <div className='projects-wrapper'>
      <div className='projects-title'>Recent Projects</div>
      <div className='project-card'>
        <Link to='/portfolio/travelbook'>
          <Project
            title='Travelbook'
            imageURL={travelbook}
            alternate='Travelbook'
          />
        </Link>
      </div>
      <div className='project-card'>
        <Link to='/portfolio/covid'>
          <Project
            title='COVID-19 Tracker'
            imageURL={covid}
            alternate='Covid-19'
          />
        </Link>
      </div>

      <div className='project-card'>
        <Link to='/portfolio/employee'>
          <Project
            title='Employee Tracking CLI'
            imageURL={employee}
            alternate='employee'
          />
        </Link>
      </div>

      <div className='project-card'>
        <Link to='/portfolio/good-samaritan'>
          <Project
            title='Good Samaritan'
            imageURL={goodsamaritan}
            alternate='Good Samaritan'
          />
        </Link>
      </div>
      <div className='project-card'>
        <Link to='/portfolio/weather'>
          <Project
            title='Weather Forecast'
            imageURL={weather}
            alternate='Weather'
          />
        </Link>
      </div>

      <div className='project-card'>
        <Link to='/portfolio/transactions'>
          <Project
            title='Offline Transactions'
            imageURL={transactions}
            alternate='Transactions'
          />
        </Link>
      </div>
    </div>
  )
}

export default Projects
