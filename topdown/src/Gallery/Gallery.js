import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import Navbar from '../NavBar/Navbar'
import Image1 from'./Image1.jpg'
import MetalFlashing from './MetalFlashing.jpg'
import RetainingWall from './RetainingWall.jpg'
import Roofing1 from './Roofing1.jpg'
import Roofing2 from './Roofing2.jpg'
import Scaffolding from './Scaffolding.jpg'
import SlateRoofing from'./Slate Roofing.jpg'
const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: Image1 },
    { id: 2, src: MetalFlashing },
    { id: 3, src: RetainingWall },
    { id: 4, src: Roofing1 },
    { id: 5, src: Roofing2 },
    { id: 6, src: SlateRoofing },
    { id: 7, src: Scaffolding },
    // Add more images as needed
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Navbar/>
    <div className="image-gallery">
      <div className="gallery-container">
        {images.length > 0 && (
          <img src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} className="gallery-image" />
        )}
        <button className="nav-button" onClick={handlePrev}>
          &lt; Prev
        </button>
        <button className="nav-button" onClick={handleNext}>
          Next &gt;
        </button>
      </div>
    </div>
    </div>
  );
};

export default Gallery;