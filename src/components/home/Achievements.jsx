import React from "react";
import "../home/Achievements.css";

const Achievements = () => {
  const achievements = [
    { label: "Client Satisfaction", percentage: 100 },
    { label: "Success Story", percentage: 100 },
    { label: "Years of Experience", number: 15 },
    { label: "Upcoming Events", number: 25 },
  ];

  return (
    <div className="achievements-container">
      {achievements.map((item, index) => (
        <div key={index} className="achievement-item">
          {item.percentage !== undefined ? (
            // 🔹 Animated Progress Circle
            <div
              className="achievement-circle"
              style={{
                "--percentage": item.percentage,
                "--rotation": `${item.percentage * 3.6}deg`,
              }}
            >
              <div className="progress-fill"></div>
              <div
                className="clock-hand"
                style={{
                  transform: `translateX(-50%) translateY(-100%) rotate(${item.percentage * 3.6}deg)`,
                }}
              ></div>
              <span className="percentage-text">{item.percentage}%</span>
            </div>
          ) : (
            // 🔹 Static Circle for Numbers
            <div className="achievement-circle number-circle">
              <span className="number-text">{item.number}</span>
            </div>
          )}
          <p className="achievement-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
