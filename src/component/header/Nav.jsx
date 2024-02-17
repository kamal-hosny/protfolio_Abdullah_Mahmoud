import React from 'react'
import DarkMode from './DarkMode'

export default function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li>Home</li>
            <li>My Works</li>
            <li>Skills</li>
            <li>Our Testimonials</li>
            <DarkMode />
        </ul>
    </div>
  )
}
