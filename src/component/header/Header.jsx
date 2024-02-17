import React from 'react'
import Nav from './Nav'
import Icon from './Icon'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
            <Icon/>
            <Nav/>
        </div>
    </div>
  )
}
