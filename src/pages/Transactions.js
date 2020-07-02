import React from 'react'
import Header from '../components/Header'
import '../styling/ProjectDescription.css'
import Footer from '../components/Footer'

const Transactions = props => {
  return (
    <>
      <Header />
      <div className='project'>
        <p className='header'>Offline Transactions</p>
        <div className='linksDiv'>
          <a
            className='linkOne'
            href='https://github.com/dustinirving/offline-transactions'
          >
            Github Repo
          </a>
          <a
            className='linkTwo'
            href='https://offline-transactions.herokuapp.com/'
          >
            Live Site
          </a>
        </div>
        <img
          className='gif'
          src={require('../gifs/budget.gif')}
          alt='Weather'
        />

        <p className='projectText'>
          This is a Progressive Web Application where the user is able to able
          add or subtract funds from their budget. It uses a service worker
          along with indexedDB for offline functionalities. The user can
          download the app with their smartphone or install it on their
          computer.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Transactions
