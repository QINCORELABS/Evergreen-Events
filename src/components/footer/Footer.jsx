import React from 'react';
import "../footer/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="https://via.placeholder.com/150?text=Evergreen+Logo" alt="Evergreen Logo" className="footer-logo" />
        <p>Connect with us</p>
        <p>Keep in touch with your events</p>
        <div className="social-icons">
          <a href="#"><img src="https://via.placeholder.com/30?text=FB" alt="Facebook" /></a>
          <a href="#"><img src="https://via.placeholder.com/30?text=Twitter" alt="Twitter" /></a>
          <a href="#"><img src="https://via.placeholder.com/30?text=YouTube" alt="YouTube" /></a>
          <a href="#"><img src="https://via.placeholder.com/30?text=Instagram" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick links</h3>
        <p>About us</p>
        <p>Services</p>
        <p>Booking</p>
        <p>Contact us</p>
      </div>
      <div className="footer-section">
        <h3>Hash tags</h3>
        <p>Hindu wedding event management in Kollam</p>
        <p>Muslim wedding event management in Kollam</p>
        <p>Christian wedding event management in Kollam</p>
      </div>
      <div className="footer-section">
        <h3>Contact us</h3>
        <p><img src="https://via.placeholder.com/15?text=Location" alt="Location" /> Evergreen Events, 6th Floor, Bishop Jerome Nagar, Chinnakkada, Kollam</p>
        <p><img src="https://via.placeholder.com/15?text=Phone" alt="Phone" /> +91 99 47 37 66 67</p>
        <p><img src="https://via.placeholder.com/15?text=Email" alt="Email" /> evergreenevents5667@gmail.com</p>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2017 - Evergreen Event Management | Designed and Developed by Qincore Labs Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;