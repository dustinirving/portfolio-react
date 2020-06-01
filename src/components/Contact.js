import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaPhone
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import '../styling/App.css'
import resume from '../docs/resume.pdf'

const Contact = props => {
  return (
    <div style={contactComponent}>
      <div style={contactBox}>
        <div style={icons} className='icons'>
          <div className='icon'>
            <a
              style={contactA}
              href='mailto:dustin.irving@gmail.com? subject=subject text'
            >
              <IconContext.Provider value={{ size: '2.75em' }}>
                <div className='socialMediaIcon'>
                  <FaEnvelope />
                </div>
              </IconContext.Provider>
              <p className='contactText'>dustin.irving@gmail.com</p>
            </a>
          </div>
          <div className='icon'>
            <a style={contactA} href='https://github.com/dustinirving'>
              <IconContext.Provider value={{ size: '2.75em' }}>
                <div className='socialMediaIcon'>
                  <FaGithub />
                </div>
              </IconContext.Provider>
              <p className='contactText'>Github</p>
            </a>
          </div>
          <div className='icon'>
            <a
              style={contactA}
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconContext.Provider value={{ size: '2.75em' }}>
                <div className='socialMediaIcon'>
                  <FaFilePdf />
                </div>
              </IconContext.Provider>
              <p className='contactText'>Resume</p>
            </a>
          </div>
          <div className='icon'>
            <a
              style={contactA}
              href='https://www.linkedin.com/in/dustin-irving-a92009194/'
            >
              <IconContext.Provider value={{ size: '2.75em' }}>
                <div className='socialMediaIcon'>
                  <FaLinkedin />{' '}
                </div>
              </IconContext.Provider>
              <p className='contactText'>LinkedIn</p>
            </a>
          </div>

          <div className='icon'>
            <a style={contactA} href='tel:613-292-4533'>
              <IconContext.Provider value={{ size: '2.75em' }}>
                <div className='socialMediaIcon'>
                  <FaPhone />
                </div>
              </IconContext.Provider>
              <p className='contactText'>(613)-292-4533</p>
            </a>
          </div>
        </div>
        <div style={footer}>&copy; Copyright 2020</div>
      </div>
    </div>
  )
}

// Styling

const contactComponent = {
  paddingTop: '2rem'
}

const contactBox = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const icons = {
  display: 'flex'
}

const contactA = {
  textDecoration: 'none',
  color: 'black'
}

const footer = {
  textAlign: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  backgroundColor: 'black',
  color: 'white',
  marginBottom: '0'
}
export default Contact
