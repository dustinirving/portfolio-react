import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'

const Travelbook = props => {
  return (
    <>
      <Header />
      <div className='planner'>
        <p className='header'>Travelbook</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/travel-book'
          >
            Github Repo
          </a>
          <a className='linkTwo' href='https://thetravelbook.herokuapp.com/'>
            Live Site
          </a>
        </div>
        <img
          className='gif'
          src={require('../gifs/travelbook.gif')}
          alt='Planner'
        />

        <p className='projectText'>
          Travelbook is a social media platform that allows users to create an
          account and post about their travel experiences. Other features
          include: editing and deleting posts, updating your profile, and
          connecting with nearby travellers. This project was developed with
          semantic UI, EJS, Node.js, Express, Sequelize and MySQL.
        </p>
      </div>
    </>
  )
}

export default Travelbook
