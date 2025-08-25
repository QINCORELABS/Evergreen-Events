import React from "react";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-title italiana-regular"><h2 className="italiana-regular">FEEL FREE TO GET IN TOUCH</h2></div>
     

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-box">
          <button className="info-btn">LOCATION</button>
          <p>Evergreen events, 6th Floor,</p>
          <p>Bishop Jerome Nagar,</p>
          <p>Chinnakkada Kollam , Kerala</p>
        </div>

        <div className="info-box">
          <button className="info-btn">MOBILE</button>
          <p>+91 99 47 37 66 67</p>
          <p>+91 99 47 25 76 82</p>
        </div>

        <div className="info-box">
          <button className="info-btn">EMAIL</button>
          <p>evergreenevents666@gmail.com</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Whats your Name" required />
          <input type="tel" placeholder="Your mobile Number" required />
          <input type="email" placeholder="Your Email" required />
        </div>

        <textarea placeholder="Your message" rows="5" required></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;