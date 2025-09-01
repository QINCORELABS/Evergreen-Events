import React from 'react';
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import evergreenlogo from "../../../public/logos/evergreen-logo.webp";

// Importing icons from react-icons
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section - Logo & Social */}
      <div className="footer-section">
        <img 
          src={evergreenlogo}
          className="footer-logo"
          alt="Evergreen Logo"
        />
        <p className="footer-title">Connect with us</p>
        <p className="footer-subtitle">Keep in touch with your events</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1AGfuWs2tv/"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="https://www.instagram.com/evergreen_events_kollam?igsh=MWM3N25mOHZzYjEwdQ=="><FaInstagram /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3>Quick links</h3>
        <ul>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/service-details">Services</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/weddings">Gallery</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>

      {/* Hash Tags */}
      <div className="footer-section">
        <h3>Hash tags</h3>
        <ul>
          <li>Hindu wedding event management in Kollam</li>
          <li>Muslim wedding event management in Kollam</li>
          <li>Christian wedding event management in Kollam</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="footer-section">
        <h3>Contact us</h3>
        <ul>
          <li><FaMapMarkerAlt /> Evergreen Events, 6th Floor, Bishop Jerome Nagar, Chinnakkada, Kollam</li>
          <li><FaPhone /> +91 99 47 37 66 67</li>
          <li><FaEnvelope /> evergreenevents6667@gmail.com</li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 - Evergreen Event Management | Designed and Developed by 
          <a href="https://qincore.in/"> Qincore Labs Private Limited</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
