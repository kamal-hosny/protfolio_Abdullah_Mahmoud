import React, {useContext} from 'react'

// import context
import { MenuContext } from "../../context/MenuContext"

export default function Nav2() {
  const { nav, setNav } = useContext(MenuContext)

  return (
    <div className={nav === false ? "nav-2 " : "nav-2 nav-2-out" }>
    <ul>
            <li>Home</li>
            <li>Our Best Work</li>
            <li>Skills</li>
            <li>My Works</li>
            <li>Our Testimonials</li>
    </ul>
</div>
  )
}
