import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'
import Footer from '../components/Footer'

const Employee = props => {
  return (
    <>
      <Header />
      <div className='project'>
        <p className='header'>Employee Tracking CLI</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/employee-tracking-cli'
          >
            Github Repo
          </a>
        </div>
        <img
          className='gif'
          src={require('../gifs/employee.gif')}
          alt='Employee'
        />

        <p className='projectText'>
          This is a command line tool that allows the user to track employees
          within a database. The user can select from a variety different
          options to add or remove employees, roles, and departments. They can
          also view all employees, employees by department, employees by
          manager, roles, departments, a total utilized budget for a particular
          department as well as update an employee's role or manager. This was
          done with Node.js and MySQL.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Employee
