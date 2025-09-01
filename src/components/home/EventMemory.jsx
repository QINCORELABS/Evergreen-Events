import React from "react";
import "../home/EventMemory.css";

const EventMemory = () => {
  return (
    <div className="event-memory">
      <video
        className="bg-video"
        src="/eventvideos/foodvideo-compressed.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>
      <div className="content">
        <div className="play-circle">❚❚</div>
        <h1>CREATE YOUR EVENT MEMORABLE</h1>
      </div>
    </div>
  );
};

export default EventMemory;