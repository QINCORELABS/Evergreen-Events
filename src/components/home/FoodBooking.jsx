import { useState } from "react";
import "../home/FoodBooking.css"

const foodItems = [
  { title: "Fish Fry", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=500&fit=crop" },
  { title: "Dessert", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=500&fit=crop" },
  { title: "Buffet", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=500&fit=crop" },
];

export default function BookingSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="booking-wrapper">
      {/* Left Image Cards */}
      <div className="image-slider">
        {/* Main Active Card */}
        <div className="main-card">
          <img src={foodItems[active].img} alt={foodItems[active].title} />
          <div className="card-overlay">
            <h3>{foodItems[active].title}</h3>
          </div>
        </div>
        
        {/* Side Cards */}
        <div className="side-cards">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={`side-card ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="booking-content">
        <p className="subtitle">BOOK TODAY</p>
        <h2>
          BOOK YOUR TASTING SESSION <br /> OR DISCUSS YOUR EVENT
        </h2>
        <button className="btn">Send free request</button>
      </div>
    </section>
  );
}