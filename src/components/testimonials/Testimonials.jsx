import React, { useState } from 'react';
import "../testimonials/Testimonials.css"
import { testimonialsData } from "../../utils/testimonials.js";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < testimonialsData.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCurrentTestimonials = () => {
    return testimonialsData.slice(currentIndex, currentIndex + 2);
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header italiana-regular">
        <div className="testimonials-subtitle italiana-regular">TESTIMONIALS</div>
        <h2 className="testimonials-title italiana-regular italiana-regular">WHAT OUR CLIENT SAY</h2>
      </div>

      <div className="testimonials-content">
        <div className="testimonials-grid">
          {getCurrentTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-text">
                "{testimonial.testimonial}"
              </div>
              <div className="testimonial-name">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-navigation">
          <button 
            className={`nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <span className="nav-arrow">←</span>
          </button>
          <button 
            className={`nav-button ${currentIndex >= testimonialsData.length - 2 ? 'disabled' : ''}`}
            onClick={goToNext}
            disabled={currentIndex >= testimonialsData.length - 2}
          >
            <span className="nav-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;