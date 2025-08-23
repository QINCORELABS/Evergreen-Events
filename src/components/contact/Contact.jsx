import React, { useState } from "react";
import "../contact/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-section-container">
      <div className="contact-section-tittle">
        <h2>FEEL FREE TO GET IN TOUCH</h2>
      </div>

      <div className="contact-details">
        <div className="contact-detail-item location-details">
          <button className="detail-button">LOCATION</button>
          <p>
            Evergreen events, 6th Floor,<br />
            Bishop Jerome Nagar,<br />
            Chinnakkada Kollam, Kerala
          </p>
        </div>

        <div className="contact-detail-item mobile-details">
          <button className="detail-button">MOBILE</button>
          <p>
            +91 99 47 37 66 67<br />
            +91 99 47 25 76 82
          </p>
        </div>

        <div className="contact-detail-item email-details">
          <button className="detail-button">EMAIL</button>
          <p>evergreenevents6667@gmail.com</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="What's your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="mobile"
                placeholder="Your mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group message-group">
            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;