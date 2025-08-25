import React, { useState } from 'react';
import "../home/HeroSection.css"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: "./carousels/firstcarousel.jpeg",  
      description: 'KERALA | ROYAL EVENTS & WEDDING PLANNER' 
    },
    { 
      image: "/carousels/secondcarousel.jpeg", 
      title: 'Wedding Event', 
      description: 'LUXURY WEDDING PLANNING' 
    },
    { 
      image: '/carousels/thirdcarousel.png', 
      title: 'Wedding Event', 
      description: 'ELITE EVENT SERVICES' 
    },
    { 
      image: '/carousels/fourthcarousel.png', 
      title: 'Wedding Event', 
      description: 'PREMIUM CELEBRATIONS' 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, title, description } = slides[currentSlide];

  return (
    <div className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-image-container">
        <img src={image} alt={title} className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Left Bottom - Title & Subtitle */}
      <div className="hero-left">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{description}</p>
        <div className="progress-section">
          <span className="slide-number">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <div className="progress-bar">
            <div 
              className="progress"
              style={{
                width: `${(100 / slides.length) * (currentSlide + 1)}%`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Center - Navigation */}
      <div className="hero-nav">
        <div className="nav-dots">
          <div 
            className={`dot-button left-dot ${currentSlide > 0 ? 'active-dot' : ''}`}
            onClick={prevSlide}
          >
            <span className="nav-arrow">←</span>
          </div>
          <div 
            className={`dot-button right-dot ${currentSlide < slides.length - 1 ? 'active-dot' : ''}`}
            onClick={nextSlide}
          >
            <span className="nav-arrow">→</span>
          </div>
        </div>
      </div>

      {/* Bottom Right - Thumbnail & Info */}
      <div className="hero-right">
        <div className="thumb-container">
          <img 
            src={slides[(currentSlide + 1) % slides.length].image} 
            alt="Next event" 
            className="hero-thumbnail"
          />
        </div>
        <div className="event-info">
          <span className="event-number">
            {String(currentSlide + 1).padStart(2, '0')} - Events
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;