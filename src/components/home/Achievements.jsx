
import React from "react";
import "../home/Achievements.css"

const Achievements = () => {
  const achievements = [
    { label: "Client Satisfaction", percentage: 70 },
    { label: "Success story", percentage: 50 },
    { label: "Years of experience", percentage: 70 },
    { label: "Upcoming events", percentage: 50 },
  ];

  return (
    <div className="achievements-container">
      {achievements.map((item, index) => (
        <div key={index} className="achievement-item">
          <div 
            className="achievement-circle"
            style={{
              "--percentage": item.percentage,
              "--rotation": `${item.percentage * 3.6}deg`
            }}
          >
            <div className="progress-fill"></div>
            <div className="clock-hand"></div>
            <span className="percentage-text">{item.percentage}%</span>
          </div>
          <p className="achievement-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;