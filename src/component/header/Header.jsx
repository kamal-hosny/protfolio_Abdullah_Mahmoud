// CSS Style
import "./header.css"
// import React
import React, { useState } from 'react'
// import Component
import Nav from './Nav'
import Icon from './Icon'
import Menu from './Menu'
import DarkMode from './DarkMode'
import Nav2 from "./Nav2"


export default function Header() {
  const [nav ,setNav] = useState(false)

  const handleNav = (check) => {
    setNav(!check)
    // alert("The function has been called!");
  }

  return (
    <div className='header'>
      <span className="rectangle"></span>
        <div className="container">
            <Icon />
            <Nav />
            <Nav2 how={nav}/>
            <div className='menu-darkmode'>
                <Menu action={handleNav} />
                <DarkMode />
            </div>
        </div>
    </div>
  )
}
