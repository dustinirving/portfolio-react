import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link'
import '../styling/App.css'

const Navbar = props => {
  function changeFontColor (event) {
    event.target.style.color = '#D3D3D3'
  }
  function setDefaultColor (event) {
    event.target.style.color = 'white'
  }

  return (
    <div style={navbarWrapper}>
      <div style={navbarComponent}>
        <div style={navbarName}>
          <Link
            onMouseOver={changeFontColor}
            onMouseLeave={setDefaultColor}
            style={navbarNameA}
            className='navbarNameA'
            to='/#navbar'
          >
            Dustin Irving
          </Link>
        </div>
        <div style={spacer}></div>
        <div>
          <ul className='navbarItemsUL' style={navbarItemsUL}>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to='/#about'
                activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to='/#projects'
                activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li style={navbarItemsLI}>
              <Link
                onMouseOver={changeFontColor}
                onMouseLeave={setDefaultColor}
                style={navbarItemsA}
                to='/#contact'
                activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Styling

const navbarWrapper = {
  zIndex: '+1',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '5rem',
  lineHeight: '5rem',
  backgroundColor: 'black',
  paddingLeft: '2rem'
}

const navbarComponent = {
  display: 'flex',
  height: '10vh'
}

const spacer = {
  flex: 1
}

const navbarName = {}

const navbarNameA = {
  textDecoration: 'none',
  color: 'white'
}

const navbarItemsUL = {
  listStyle: 'none',
  margin: '0',
  display: 'flex',
  paddingRight: '3rem'
}

const navbarItemsLI = {
  padding: '0 0.5rem'
}

const navbarItemsA = {
  textDecoration: 'none',
  color: 'white'
}

export default Navbar
