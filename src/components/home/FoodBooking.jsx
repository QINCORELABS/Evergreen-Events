import React, { useState } from 'react';
import "../booking/Booking.css"
import weddingimg from "../../assets/about/about-us-img.webp"

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderNumber: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="booking-section-container">
      {/* Left Side - Wedding Image */}
      <div className="booking-section-leftside">
        <div className="white-bg-img"></div>
        <div className="wedding-img">
          <img src={weddingimg} alt="" srcset="" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="booking-section-rightside">
        <div className="form-container">
          <h2 className="form-title ">SEND YOUR EVENT DETAILS</h2>
          
          <div className="booking-form">
            {/* First Row */}
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="form-row">
              <div className="form-group">
                <label>Order Number</label>
                <input
                  type="text"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Select your event</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="form-input form-select"
                >
                  <option value="">Select your event</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group-full">
              <label>Your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input form-textarea"
                rows="4"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <button type="button" onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;