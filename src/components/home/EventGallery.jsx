import React from 'react'
import "../home/EventGallery.css"

const EventGallery = () => {
  return (
    <div className='event-gallery-container'>

      {/* Headings */}
      <div className="event-gallery-contents">
        <h3>EVENT GALLERY</h3>
        <div className="event-gallery-line"></div>
        <div className="event-gallery-main-heading">
          <h2>
            HAVE A LOOK INTO SOME OF OUR WELL <br />
            REPUTED EVENT MANAGEMENT SNAP <br />
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

      {/* Gallery Grid */}
      <div className="event-gallery-grid">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
        <div className="box box6"></div>
        <div className="box box7"></div>
      </div>

      {/* Button */}
      <div className="see-more-btn">
        <button>See More</button>
      </div>

    </div>
  )
}

export default EventGallery
