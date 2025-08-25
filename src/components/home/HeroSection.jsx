import React, { useState } from 'react';
import "../home/HeroSection.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: './carousels/firstcarousel.jpeg', title: 'Wedding Event 1', description: 'Kerala Royal Events & Wedding Planner' },
    { image: './carousels/secondcarousel.jpeg', title: 'Wedding Event 2', description: 'Luxury Wedding Planning' },
    { image: './carousels/thirdcarousel.png', title: 'Wedding Event 3', description: 'Elite Event Services' },
    { image: './carousels/fourthcarousel.png', title: 'Wedding Event 3', description: 'Elite Event Services' },
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
      <div className="hero-image">
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="hero-content">
        <h1 style={{ color: '#ffffff' }}>{title}</h1>
        <p style={{ color: '#ffffff' }}>{description}</p>
        <div className="progress-bar">
          <div className="progress" style={{ backgroundColor: '#00ff00', width: `${(100 / slides.length) * (currentSlide + 1)}%` }}></div>
        </div>
        <div className="event-nav">
          <span style={{ color: '#ffffff' }}>{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="nav-arrows">
            <span style={{ color: '#ffffff' }} onClick={prevSlide}>←</span>
            <span style={{ color: '#ffffff' }} onClick={nextSlide}>→</span>
          </div>
          <span style={{ color: '#ffffff' }}>{String(slides.length).padStart(2, '0')} - Events</span>
        </div>
        <div className="thumbnail">
          <img src={slides[(currentSlide + 1) % slides.length].image} alt={slides[(currentSlide + 1) % slides.length].title} style={{ width: '150px', height: '100px', objectFit: 'cover', border: '2px solid #ffffff' }} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;