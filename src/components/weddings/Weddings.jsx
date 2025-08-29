import React, { useState } from 'react';
import "../weddings/Weddings.css";
import weddingData from "../../utils/weddingData";
import { FaExpand } from 'react-icons/fa';

const Weddings = () => {
  const [selectedCategory, setSelectedCategory] = useState('hindu');
  const [contentType, setContentType] = useState('images');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [expandedVideo, setExpandedVideo] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setContentType('images');
    setPlayingVideo(null);
    setExpandedVideo(null);
  };

  const handleContentTypeClick = (type) => {
    setContentType(type);
    setPlayingVideo(null);
    setExpandedVideo(null);
  };

  const handlePlayVideo = (video) => {
    setPlayingVideo(video.id === playingVideo ? null : video.id);
  };

  const handleExpandVideo = (video) => {
    setExpandedVideo(video);
  };

  const handleCloseExpanded = () => {
    setExpandedVideo(null);
  };

  const renderGallery = () => {
    if (!selectedCategory || !contentType) return null;

    const data = weddingData[selectedCategory];
    
    if (contentType === 'images') {
      return (
        <div className="gallery-grid">
          {data.images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      );
    }

    if (contentType === 'videos') {
      return (
        <div className="gallery-grid">
          {data.videos.map(video => (
            <div key={video.id} className="gallery-item">
              {playingVideo === video.id ? (
                <video controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="video-preview" onClick={() => handlePlayVideo(video)}>
                  <video poster={video.src}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button className="play-button">▶</button>
                  <button className="expand-button" onClick={(e) => { e.stopPropagation(); handleExpandVideo(video); }}>
                    <FaExpand />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className='wedding-section-container'>
      <div className="wedding-categories-btns">
        <button 
          className={selectedCategory === 'hindu' ? 'active' : ''}
          onClick={() => handleCategoryClick('hindu')}
        >
          HINDU WEDDING
        </button>
        <button 
          className={selectedCategory === 'muslim' ? 'active' : ''}
          onClick={() => handleCategoryClick('muslim')}
        >
          MUSLIM WEDDING
        </button>
        <button 
          className={selectedCategory === 'christian' ? 'active' : ''}
          onClick={() => handleCategoryClick('christian')}
        >
          CHRISTIAN WEDDING
        </button>
      </div>
      <div className="content-type-btns">
        <button 
          className={contentType === 'images' ? 'active' : ''}
          onClick={() => handleContentTypeClick('images')}
        >
          Image Showcase
        </button>
        <button 
          className={contentType === 'videos' ? 'active' : ''}
          onClick={() => handleContentTypeClick('videos')}
        >
          Video Showcase
        </button>
      </div>
      <div className="content-area">
        {renderGallery()}
      </div>
      {expandedVideo && (
        <div className="modal" onClick={handleCloseExpanded}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay>
              <source src={expandedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-button" onClick={handleCloseExpanded}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weddings;