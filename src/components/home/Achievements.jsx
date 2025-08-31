import React from "react";
import "../home/Achievements.css";

const Achievements = () => {
  const achievements = [
    { label: "Client Satisfaction", percentage: 100 },
    { label: "Success Story", percentage: 100 },
    { label: "Years of Experience", percentage: 100, display: "15+" },
    { label: "Upcoming Events", percentage: 100, display: "25+" },
  ];

  return (
    <div className="achievements-container">
      {achievements.map((item, index) => {
        const rotation = item.percentage * 3.6; // Always 360 for full circle
        return (
          <div key={index} className="achievement-item">
            <div
              className="achievement-circle"
              style={{
                "--percentage": 100, // Force full circle
                "--rotation": "360deg",
              }}
            >
              <div className="progress-fill"></div>
              <span className="percentage-text">
                {item.display ? item.display : `${item.percentage}%`}
              </span>
            </div>
            <p className="achievement-label">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
