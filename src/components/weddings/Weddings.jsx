import React, { useState } from 'react';
import "../weddings/Weddings.css"

const Weddings = () => {
  const [category, setCategory] = useState('HINDU WEDDING');
  const [showcase, setShowcase] = useState('Image Showcase');

  // Sample wedding videos data with realistic names
  const weddingVideos = {
    'HINDU WEDDING': [
      'Mehndi Ceremony',
      'Sangam Function',
      'Haldi Ritual',
      'Baraat Procession',
      'Mandap Ceremony',
      'Saptapadi Ritual',
      'Sindoor Ceremony',
      'Vidaai Moment',
      'Reception Dance'
    ],
    'MUSLIM WEDDING': [
      'Nikah Ceremony',
      'Mehndi Night',
      'Qawwali Performance',
      'Rukhsati Moment',
      'Walima Reception',
      'Ring Ceremony',
      'Dua & Prayers',
      'Traditional Dance',
      'Couple Portraits'
    ],
    'CHRISTIAN WEDDING': [
      'Church Ceremony',
      'Wedding Vows',
      'Ring Exchange',
      'Bridal Walk',
      'First Dance',
      'Cake Cutting',
      'Bouquet Toss',
      'Reception Party',
      'Couple Exit'
    ]
  };
  const weddingImages = {
    'HINDU WEDDING': [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop'
    ],
    'MUSLIM WEDDING': [
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop'
    ],
    'CHRISTIAN WEDDING': [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    ]
  };

  const renderGallery = () => {
    const images = weddingImages[category] || [];
    return (
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={imageUrl} 
              alt={`${category} ${index + 1}`}
              className="gallery-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.backgroundColor = '#333';
                e.target.parentElement.innerHTML = `<div class="image-fallback">Image ${index + 1}</div>`;
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderVideoShowcase = () => {
    const videoColors = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#ccff99', '#99ccff', '#ff99cc', '#99ffcc', '#cc99ff'];
    const videos = weddingVideos[category] || [];
    
    return (
      <div className="gallery">
        {videos.map((videoName, index) => (
          <div 
            key={`video-${index}`} 
            className="gallery-item" 
            style={{
              backgroundColor: videoColors[index],
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <div className="play-button">▶</div>
            <div className="video-text">{videoName}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="wedding-container">
      <div className="header">
        <h1 className="header-title">{category}</h1>
      </div>
      
      <div className="nav-buttons">
        {['HINDU WEDDING', 'MUSLIM WEDDING', 'CHRISTIAN WEDDING'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setCategory(cat)}
            className={`nav-button ${category === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="showcase-buttons">
        {['Image Showcase', 'Video Showcase'].map((show) => (
          <button 
            key={show}
            onClick={() => setShowcase(show)}
            className={`showcase-button ${showcase === show ? 'active' : ''}`}
          >
            {show}
          </button>
        ))}
      </div>
      
      {showcase === 'Image Showcase' ? renderGallery() : renderVideoShowcase()}
    </div>
  );
};

export default Weddings;