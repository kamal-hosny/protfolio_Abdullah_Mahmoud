import React from 'react'

import Nav from './Nav'
import Icon from './Icon'

import "./header.css"
import Menu from './Menu'
import DarkMode from './DarkMode'

export default function Header() {
  return (
    <div className='header'>
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
