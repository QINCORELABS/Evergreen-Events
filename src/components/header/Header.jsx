import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../header/Header.css";
import evergreenlogo from "../../../public/logos/evergreen-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-left-section">
        <img src={evergreenlogo} alt="Evergreen Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <div className={`nav-menus ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/weddings">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Right Side CTA */}
      <div className="nav-contact">
        <button>Book now</button>
      </div>
    </nav>
  );
};

export default Header;
