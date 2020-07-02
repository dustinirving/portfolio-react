import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'
import Footer from '../components/Footer'

const Weather = props => {
  return (
    <>
      <Header />
      <div className='project'>
        <p className='header'>Weather Dashboard</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/weather-forecast'
          >
            Github Repo
          </a>
          <a
            className='linkTwo'
            href='https://dustinirving.github.io/weather-forecast/'
          >
            Live Site
          </a>
        </div>
        <img
          className='gif'
          src={require('../gifs/weather.gif')}
          alt='Weather'
        />

        <p className='projectText'>
          This application makes use of a weather API to display the 5-day
          weather forecast for a specified location. I was tasked with
          developing the user interface in HTML and Bootstrap, while also using
          JavaScript to fetch the data and create functionality.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Weather
