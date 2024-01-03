import React, { useState, useEffect } from 'react';
import image6 from '../images/image6.jpg';
import image2 from '../images/image2.jpg';
import image5 from '../images/image5.jpg';
import image4 from '../images/image4.jpg';

import project4 from '../images/project4.jpg';
import project3 from '../images/project3.jpg';

import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; // Import your desired icons

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image6, image2, image5, image4];
const imag=[project4,project3,project1,project2]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imag.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [imag.length]);

  const sectionStyle = {
    backgroundImage: `url(${imag[currentImageIndex]})`,
    backgroundSize: 'cover',
    // height: '662px',
    textAlign: 'center',
    margin: '220px',
    // padding: '20px',
    color: '#333',
  };

  const iconStyle = {
    backgroundImage:'transpernt',
    fontSize: '24px', // Adjust the icon size
    margin: '5px',
    // padding :'2px', // Adjust the margin between icons
    alignItems:  'center',
  };

  return (
    // <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentImageIndex ? 'active' : 'active'}`}

            
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '362px' }}
          >
            <div style={sectionStyle}>
              <h2 style={{ color: '#fff' }}>Your Title</h2>
              <p>Your description or content</p>
              <button className="btn btn-primary">Learn More</button>
              <div>
                <FontAwesomeIcon icon={faCoffee} style={iconStyle }  />
                <FontAwesomeIcon icon={faHeart} style={iconStyle} />
                <FontAwesomeIcon icon={faStar} style={iconStyle} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
