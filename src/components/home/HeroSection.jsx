import React from 'react';
import "../home/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img src="https://via.placeholder.com/1200x600" alt="Wedding Event Stage" />
      </div>
      <div className="hero-content">
        <h1>Wedding Event</h1>
        <p>Kerala Royal Events & Wedding Planner</p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="event-nav">
          <span>01</span>
          <div className="nav-arrows">
            <span>←</span>
            <span>→</span>
          </div>
          <span>01 - Events</span>
        </div>
        <div className="thumbnail">
          <img src="https://via.placeholder.com/150x100" alt="Event Thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;