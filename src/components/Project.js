import React from 'react'
import '../styling/Projects.css'

const Project = props => {
  return (
    <div>
      <img className='image-style' src={props.imageURL} alt={props.alternate} />
      <h2 className='overlay-text'>{props.title}</h2>
    </div>
  )
}

export default Project
