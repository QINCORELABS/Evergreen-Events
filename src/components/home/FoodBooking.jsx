import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "../home/FoodBooking.css";
/*carousel images import*/
import foodone from "/carousels/foodone.jpg";
import foodtwo from "/carousels/foodtwo.jpg";
import foodthree from "/carousels/foodthree.jpg";

const FoodBooking = () => {
  const images = [foodone, foodtwo, foodthree];
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleButtonClick = () => {
    navigate("/contact"); // ✅ navigate to /contact
  };

  return (
    <div className="food-booking-section">
      {/* Image Carousel */}
      <div className="carousel-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img src={src} alt={`Food ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="food-content">
        <p className="small-heading"><u>BOOK TODAY </u></p>
        <h2>
          BOOK YOUR TASTING SESSION <br /> OR DISCUSS YOUR EVENT
        </h2>
        <button className="book-btn" onClick={handleButtonClick}>
          Send free request
        </button>
      </div>
    </div>
  );
};

export default FoodBooking;
