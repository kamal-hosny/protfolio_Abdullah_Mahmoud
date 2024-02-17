// CSS Style
import "./header.css"
// import React
import React from 'react'
// import Component
import Nav from './Nav'
import Icon from './Icon'
import Menu from './Menu'
import DarkMode from './DarkMode'


export default function Header() {
  return (
    <div className='header'>
      <span className="rectangle"></span>
        <div className="container">
            <Icon />
            <Nav />
            <div className='menu-darkmode'>
                <Menu />
                <DarkMode />
            </div>
        </div>
    </div>
  )
}
