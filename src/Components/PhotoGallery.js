import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './../Assets/gallery/gallery1.jpeg';
import img2 from './../Assets/gallery/gallery2.jpeg';
import img22 from './../Assets/gallery/gallery22.jpeg';
import img4 from './../Assets/gallery/gallery4.jpeg';
import img5 from './../Assets/gallery/gallery5.jpeg';
import img7 from './../Assets/gallery/gallery7.jpeg';
import img8 from './../Assets/gallery/gallery8.jpeg';
import img9 from './../Assets/gallery/gallery9.jpeg';
import img10 from './../Assets/gallery/gallery10.jpeg';
import img11 from './../Assets/gallery/gallery11.jpeg';
import img12 from './../Assets/gallery/gallery12.jpeg';
import img21 from './../Assets/gallery/gallery21.jpeg';
import img14 from './../Assets/gallery/gallery14.jpeg';
import img15 from './../Assets/gallery/gallery15.jpeg';
import img16 from './../Assets/gallery/gallery16.jpeg';
import img17 from './../Assets/gallery/gallery17.jpeg';
import img18 from './../Assets/gallery/gallery18.jpeg';
import img19 from './../Assets/gallery/gallery19.jpeg';
import img20 from './../Assets/gallery/gallery20.jpeg';

import React, { useState } from 'react';

const PhotoGallery = () => {
  // Array of photos for the gallery
  const [photos, setPhotos] = useState([
    img1,
    img2,
    img4,
    img5,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22
  ]);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Handle previous photo button click
  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex - 1 + photos.length) % photos.length);
  };

  // Handle next photo button click
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
  };

  return (
    <div className="photo-gallery">
      <div className="photo-gallery-controls">
        <button onClick={handlePrevPhoto} className="slider__button slider__button--desktop">Previous</button>
      </div>
      <img src={photos[currentPhotoIndex]} alt="Wedding photos" />

      <div className="photo-gallery-controls">
        <button onClick={handlePrevPhoto} className="slider__button slider__button--mobile">Previous</button>
        <button onClick={handleNextPhoto} className="slider__button">Next</button>
      </div>
    </div>
  );
};

export default PhotoGallery;
