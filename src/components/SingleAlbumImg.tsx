import React, { useState } from 'react';

interface SingleAlbumImgProps {
  src: string;
  alt?: string; // Optional alt prop for accessibility
}

const SingleAlbumImg: React.FC<SingleAlbumImgProps> = ({ src, alt }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div
      className={`single-album-img-container ${isOverlayOpen ? 'overlay' : ''}`}
      onClick={handleClick}
      style={{
        position: isOverlayOpen ? 'fixed' : 'static', // Ensure proper positioning
        top: 0,
        left: 0,
        width: isOverlayOpen ? '100vw' : 'auto',
        height: isOverlayOpen ? '100vh' : 'auto',
        backgroundColor: isOverlayOpen ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex: isOverlayOpen ? '50' : ''
      }}
    >
      <img src={src} alt={alt || 'Image'} // Set default alt if not provided
        style={{
          width: isOverlayOpen ? 'auto' : '100%', // Consistent width handling
          height: isOverlayOpen ? '80vh' : 'auto',
        }}
      />
      {/* Handle clicks outside the image in overlay mode */}
      {isOverlayOpen && (
        <div
          className="overlay-backdrop"
          onClick={handleClick} // Close overlay on backdrop click
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, // Ensure overlay backdrop is above content
          }}
        />
      )}
    </div>
  );
};

export default SingleAlbumImg;
