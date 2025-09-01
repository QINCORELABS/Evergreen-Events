import React from "react";
import "../home/Achievements.css"

const Achievements = () => {
  const achievements = [
    { label: "Client Satisfaction", percentage: 70 },
    { label: "Success Story", percentage: 50 },
    { label: "Years of Experience", percentage: 70, display: "15+" },
    { label: "Upcoming Events", percentage: 50, display: "25+" },
  ];

  return (
    <div className="achievements-container">
      {achievements.map((item, index) => {
        const percentageDeg = (item.percentage / 100) * 360;
        
        return (
          <div key={index} className="achievement-item">
            <div 
              className="achievement-circle"
              style={{
                '--percentage-deg': `${percentageDeg}deg`
              }}
            >
              <div 
                className="progress-fill"
                style={{
                  '--percentage-deg': `${percentageDeg}deg`
                }}
              ></div>
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