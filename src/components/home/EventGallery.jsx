import React from 'react';
import "../home/EventGallery.css"

const EventGallery = () => {
  return (
    <div className="event-gallery-container">
      <div className="event-gallery-wrapper">
        {/* Left Content */}
        <div className="event-gallery-left">
          {/* Headings */}
          <div className="event-gallery-contents">
            <h3>EVENT GALLERY</h3>
            <div className="event-gallery-line"></div>
            
            <div className="event-gallery-main-heading">
              <h2>
                HAVE A LOOK INTO SOME OF OUR WELL<br/>
                REPUTED EVENT MANAGEMENT SNAP<br/>
                COLLECTIONS.
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="event-buttons">
            <button>HINDU WEDDING</button>
            <button>MUSLIM WEDDING</button>
            <button>CHRISTIAN WEDDING</button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="event-gallery-grid">
          <div className="gallery-item item-1">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=600&fit=crop" alt="Wedding setup" />
          </div>
          <div className="gallery-item item-2">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop" alt="Traditional ceremony" />
          </div>
          <div className="gallery-item item-3">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop" alt="Hindu ceremony" />
          </div>
          <div className="gallery-item item-4">
            <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=700&fit=crop" alt="Wedding decoration" />
          </div>
          <div className="gallery-item item-5">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" alt="Wedding venue" />
          </div>
          <div className="gallery-item item-6">
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop" alt="Wedding setup" />
          </div>
          <div className="gallery-item item-7">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop" alt="Wedding cake" />
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="see-more-btn">
        <button>
          See More
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default EventGallery;