// import React
import React from 'react'
// import Component
import DarkMode from './DarkMode'

export default function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li>Home</li>
            <li>Our Best Work</li>
            <li>Skills</li>
            <li>My Works</li>
            <li>Our Testimonials</li>
            <DarkMode />
        </ul>
    </div>
  )
}
