import React from 'react'
import Project from './Project'
import '../styling/Projects.css'
import { Link } from 'react-router-dom'

// Images
import covid from '../images/covid.jpg'
import travelbook from '../images/travelbook.png'
import goodsamaritan from '../images/samaritan.jpg'
import employee from '../images/employee.jpg'

const Projects = props => {
  return (
    <div className='projects-wrapper'>
      <div className='projects-title'>Recent Projects</div>
      <div className='project-card project-1'>
        <Link to='/travelbook'>
          <Project
            title='Travelbook'
            imageURL={travelbook}
            alternate='Travelbook'
          />
        </Link>
      </div>
      <div className='project-card project-2'>
        <Link to='/covid'>
          <Project
            title='COVID-19 Tracker'
            imageURL={covid}
            alternate='Covid-19'
          />
        </Link>
      </div>

      <div className='project-card project-3'>
        <Link to='/employee'>
          <Project
            title='Employee Tracking CLI'
            imageURL={employee}
            alternate='employee'
          />
        </Link>
      </div>

      <div className='project-card project-4'>
        <Link to='/good-samaritan'>
          <Project
            title='Good Samaritan'
            imageURL={goodsamaritan}
            alternate='Good Samaritan'
          />
        </Link>
      </div>
    </div>
  )
}

export default Projects
