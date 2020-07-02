import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'
import Footer from '../components/Footer'

const Samaritan = props => {
  return (
    <>
      <Header />
      <div className='project'>
        <p className='header'>Good Samaritan</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/good-samaritan'
          >
            Github Repo
          </a>
          <a
            className='linkTwo'
            href='https://serene-mountain-91633.herokuapp.com/'
          >
            Live Site
          </a>
        </div>
        <img
          className='gif'
          src={require('../gifs/samaritan.gif')}
          alt='Good Samaritan'
        />

        <p className='projectText'>
          Good Samaritan was developed in a period of 36 hours, as apart of the
          2020 Ryerson University Hackathon. This application was designed to
          minimize opioid misuse related harm. Functionalities include:
          retrieving geolocation, sending information associated with overdose
          symptoms, as well as allowing volunteers and patients to sign up. This
          application was created with HTML, Bootstrap, Node.js, Express,
          Sequelize and MySQL.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Samaritan
