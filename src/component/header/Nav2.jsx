import React from 'react'

export default function Nav2({how}) {

    console.log(how)

  return (
    <div className={how === false ? "nav-2" : "nav-2 nav-2-out"}>
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
