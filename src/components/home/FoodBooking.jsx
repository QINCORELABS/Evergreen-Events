import { useState } from "react";
import "../home/FoodBooking.css"

const foodItems = [
  {
    title: "Fish Fry",
    img: "https://source.unsplash.com/600x400/?fish",
  },
  {
    title: "Dessert",
    img: "https://source.unsplash.com/600x400/?dessert",
  },
  {
    title: "Buffet",
    img: "https://source.unsplash.com/600x400/?buffet",
  },
  {
    title: "Salad",
    img: "https://source.unsplash.com/600x400/?salad",
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
