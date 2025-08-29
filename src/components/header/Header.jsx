import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../header/Header.css";
import evergreenlogo from "../../../public/logos/evergreen-green-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? "active-nav" : ""}>
      <div className="nav-left-section">
        <img src={evergreenlogo} alt="Evergreen Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <div className={`nav-menus ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>
          <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="/weddings" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

          {/* Mobile CTA */}
          <li className="mobile-cta"><button>Book now</button></li>
        </ul>
      </div>

      {/* Desktop CTA */}
      <div className="nav-contact">
        <button>Book now</button>
      </div>
    </nav>
  );
};

export default Header;
