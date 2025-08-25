import { useState } from "react";
import "../home/FoodBooking.css"

const foodItems = [
  {
    title: "Fish Fry",
    img: "./carousels/foodone.jpg",
  },
  {
    title: "Dessert",
    img: "./carousels/foodtwo.jpg",
  },
  {
    title: "Buffet",
    img: "./carousels/foodthree.jpg",
  },
  
];

export default function BookingSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="booking-wrapper">
      {/* Left Image Cards */}
      <div className="image-slider">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className={`card ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

      {/* Right Content */}
      <div className="booking-content ">
        <p className="subtitle italiana-regular">BOOK TODAY</p>
        <h2 className="italiana-regular">
          BOOK YOUR TASTING SESSION <br /> OR DISCUSS YOUR EVENT
        </h2>
        <button className="btn">Send free request</button>
      </div>
    </section>
  );
}
