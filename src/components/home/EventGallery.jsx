import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home/EventGallery.css";
const EventGallery = () => {
  const [activeCategory, setActiveCategory] = useState("HINDU WEDDING");

  const galleryImages = {
    "HINDU WEDDING": [
      { id: 1, src: "./hinduwedding/hw1.jpg", alt: "Hindu Wedding 1" },
      { id: 2, src: "./hinduwedding/hw2.jpg", alt: "Hindu Wedding 2" },
      { id: 3, src: "./hinduwedding/hw3.jpg", alt: "Hindu Wedding 3" },
      { id: 4, src: "./hinduwedding/hw4.jpg", alt: "Hindu Wedding 4" },
      { id: 5, src: "./hinduwedding/hw5.jpg", alt: "Hindu Wedding 5" },
      { id: 6, src: "./hinduwedding/hw6.jpg", alt: "Hindu Wedding 6" },
    ],
    "MUSLIM WEDDING": [
      { id: 7, src: "./muslimwedding/mw1.jpg", alt: "Muslim Wedding 1" },
      { id: 8, src: "./muslimwedding/mw2.jpg", alt: "Muslim Wedding 2" },
      { id: 9, src: "./muslimwedding/mw3.jpg", alt: "Muslim Wedding 3" },
      { id: 10, src: "./muslimwedding/mw4.jpg", alt: "Muslim Wedding 4" },
      { id: 11, src: "./muslimwedding/mw5.jpg", alt: "Muslim Wedding 5" },
      { id: 12, src: "./muslimwedding/mw6.jpg", alt: "Muslim Wedding 6" },
    ],
    "CHRISTIAN WEDDING": [
      { id: 13, src: "./christianwedding/cw1.jpg", alt: "Christian Wedding 1" },
      { id: 14, src: "./christianwedding/cw2.jpg", alt: "Christian Wedding 2" },
      { id: 15, src: "./christianwedding/cw3.jpg", alt: "Christian Wedding 3" },
      { id: 16, src: "./christianwedding/cw4.jpg", alt: "Christian Wedding 4" },
      { id: 17, src: "./christianwedding/cw5.jpg", alt: "Christian Wedding 5" },
      { id: 18, src: "./christianwedding/cw6.jpg", alt: "Christian Wedding 6" },
    ],
  };

  const currentImages = galleryImages[activeCategory] || [];

  return (
    <div className="event-gallery-container">
      <div className="event-gallery-headings">
        <h3>
          <u>EVENT GALLERY</u>
        </h3>
        <h2>
          HAVE A LOOK INTO SOME OF OUR WELL REPUTED EVENT MANAGEMENT SNAP
          COLLECTIONS
        </h2>
      </div>

      <div className="event-gallery-buttons">
        {["HINDU WEDDING", "MUSLIM WEDDING", "CHRISTIAN WEDDING"].map(
          (category) => (
            <button
              key={category}
              className={`gallery-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="gallery-grid">
        {currentImages.map((image, index) => (
          <div key={image.id} className={`image-container image-${index + 1}`}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="see-more-container">
        <button className="see-more-button">
          <Link to="/weddings" className="see-more-link">
            See More <span className="arrow">→</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EventGallery;
