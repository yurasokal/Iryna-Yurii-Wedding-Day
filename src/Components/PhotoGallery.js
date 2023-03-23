import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './../Assets/Carousel/IMG_01.jpg';
import img2 from './../Assets/Carousel/IMG_02.jpg';
import img3 from './../Assets/Carousel/IMG_03.JPG';
import img4 from './../Assets/Carousel/IMG_04.jpg';
import img5 from './../Assets/Carousel/IMG_05.jpg';
import img6 from './../Assets/Carousel/IMG_06.jpg';
import img8 from './../Assets/Carousel/IMG_08.jpg';
import img9 from './../Assets/Carousel/IMG_09.JPG';
import img11 from './../Assets/Carousel/IMG_11.JPG';
import img12 from './../Assets/Carousel/IMG_12.JPG';
import img13 from './../Assets/Carousel/IMG_13.JPG';
import img14 from './../Assets/Carousel/IMG_14.JPG';
import img15 from './../Assets/Carousel/IMG_15.jpg';
import img16 from './../Assets/Carousel/IMG_16.jpg';
import img17 from './../Assets/Carousel/IMG_17.jpg';
import img18 from './../Assets/Carousel/IMG_18.jpg';
import img19 from './../Assets/Carousel/IMG_19.jpg';
import img20 from './../Assets/Carousel/IMG_20.jpg';
import img21 from './../Assets/Carousel/IMG_21.JPG';
import img22 from './../Assets/Carousel/IMG_22.jpg';
import img23 from './../Assets/Carousel/IMG_23.JPG';
import img10 from './../Assets/Carousel/IMG_10.JPG';
import img24 from './../Assets/Carousel/IMG_24.jpg';
import img25 from './../Assets/Carousel/IMG_25.JPG';
import img26 from './../Assets/Carousel/IMG_26.JPG';
import img27 from './../Assets/Carousel/IMG_27.jpg';
import img28 from './../Assets/Carousel/IMG_28.JPG';
import img29 from './../Assets/Carousel/IMG_29.JPG';
import img30 from './../Assets/Carousel/IMG_30.jpg';
import img31 from './../Assets/Carousel/IMG_31.JPG';
import img32 from './../Assets/Carousel/IMG_32.jpg';
import img33 from './../Assets/Carousel/IMG_33.jpg';
import img34 from './../Assets/Carousel/IMG_34.jpg';
import img35 from './../Assets/Carousel/IMG_35.jpg';
import React, { useState } from 'react';

const PhotoGallery = () => {
  // Array of photos for the gallery
  const [photos, setPhotos] = useState([
    img1,
    img2,
    img3,
    img3,
    img4
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
      <img src={photos[currentPhotoIndex]} alt="Wedding photo" />

      <div className="photo-gallery-controls">
        <button onClick={handlePrevPhoto} className="slider__button">Previous</button>
        <button onClick={handleNextPhoto} className="slider__button">Next</button>
      </div>
    </div>
  );
};

export default PhotoGallery;
