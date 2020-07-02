import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'
import Footer from '../components/Footer'

const Covid = props => {
  return (
    <>
      <Header />
      <div className='project'>
        <p className='header'>COVID-19 Tracker</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/covid19-tracker'
          >
            Github Repo
          </a>
          <a
            className='linkTwo'
            href='https://lagbana.github.io/covid19-tracker/'
          >
            Live Site
          </a>
        </div>
        <img className='gif' src={require('../gifs/covid.gif')} alt='Covid' />

        <p className='projectText'>
          The COVID-19 Tracker retrieves the latest data regarding cases of
          COVID-19 and displays a graphical representation. It also provides the
          user with the most recent news updates. The following technologies
          were used to develop this application: MaterializeCSS, HTML,
          JavaScript, Chart.js, an open source COVID-19 API, and the NYT API.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Covid
