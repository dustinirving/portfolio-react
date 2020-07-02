import React from 'react'

function Footer () {
  return <div style={footer}>&copy; Copyright 2020</div>
}

export default Footer

const footer = {
  textAlign: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  backgroundColor: 'black',
  color: 'white',
  marginBottom: '0'
}
