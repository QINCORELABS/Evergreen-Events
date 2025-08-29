import React from "react";
import { Link } from "react-router-dom"; 
import "../services/ServicesSection.css";

const services = [
  { title: "Caterers", img: "/services/caters.jpg" },
  { title: "Make-up & Hair", img: "/services/makeup.jpg" },
  { title: "Mehandi", img: "/services/mehandi.jpg" },
  { title: "Decor & Florists", img: "/services/decors.jpg" },
  { title: "Photo & Video", img: "/services/photoandvideo.jpg" },
  { title: "Cakes", img: "/services/cakes.jpg" },
  { title: "Hosting Girls", img: "/services/hosting girls.jpg" },
  { title: "Wedding Cards", img: "/services/weddingcards.jpg" },
  { title: "Pooja decorations", img: "/services/poojadecorations.jpg" },
  { title: "DJ", img: "/services/dj.jpg" },
  { title: "Entertainment", img: "/services/entertainment.jpg" },
  { title: "Wedding Cars", img: "/services/wedding cars.jpg" },
];

const ServicesSection = () => {
  return (
    <div className="service-section-container">
      {/* Title */}
      <div className="service-section-title">
        <h2>
          The planning of your event takes a creative <br /> turn handled as it
          is entirely by our <br /> professionals
        </h2>
      </div>

      {/* Services Grid */}
      <div className="service-categories">
        {services.map((service, index) => (
          <Link 
            to="/service-details" // ✅ link to details page
            key={index} 
            className="service-card"
          >
            <img src={service.img} alt={service.title} />
            <div className="overlay"></div>
            <span className="service-name">{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
