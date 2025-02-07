import React, { useState } from "react";
import "./VideoCarousel.css";

const VideoCarousel = () => {
  const videos = [
    "https://www.youtube.com/embed/iifT9X6uIyA?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/JKqM9XkZ17k?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/dveQrSg4HQU?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/jpneMtcNM5E?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/R6lvatKwFMM?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/-BhjTRU20dw?rel=0&modestbranding=1&controls=1",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextSlide = () => {
    if (startIndex < videos.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={prevSlide}>&#10094;</button>
      <div className="video-slider">
        {videos.slice(startIndex, startIndex + 3).map((video, index) => (
          <div 
            key={index} 
            className="video-thumbnail" 
            onClick={() => {
              console.log("Video Clicked:", video);
              setSelectedVideo(video);
            }}
          >
            <iframe
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={nextSlide}>&#10095;</button>

      {/* Popup Window */}
      {selectedVideo && (
        <div className="popup-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>&times;</button>
            <iframe
              src={selectedVideo}
              title="Selected Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              className="popup-video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
