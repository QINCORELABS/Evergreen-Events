import React, { useState } from 'react'
import "../header/Header.css"
import evergreenlogo from "../../../public/logos/evergreen-logo.webp"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="nav-left-section">
        <img src={evergreenlogo} alt="Evergreen Logo" />
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <div className={`nav-menus ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Booking</li>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="nav-contact">
        <button>Book now</button>
      </div>
    </nav>
  )
}

export default Header