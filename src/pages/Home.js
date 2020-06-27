import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import '../styling/App.css'

function Home () {
  return (
    <div className='body'>
      <div className='navbar' id='navbar' path='/portfolio' exact>
        <Header />
      </div>
      <div className='background'>
        <div className='wrapper'>
          <div className='intro'>
            <Intro />
          </div>
        </div>
        <div className='projects' id='projects'>
          <Projects />
        </div>

        <div className='about' id='about'>
          <About />
        </div>
      </div>

      <div className='contactWrapper'>
        <div className='contact' id='contact'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
