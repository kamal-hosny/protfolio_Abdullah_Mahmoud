// CSS Style
import "./footer.css";
// import React
import React from "react";
import Social from "../Social";


export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <ul className="links">
                <li>Home</li>
                <li>My Works</li>
                <li>Skills</li>
                <li>Our Testimonials</li>
            </ul>
            <Social/>
            <p>© 2024 IXON, All rights reserved.</p>
        </div>
    </div>

  )
}
