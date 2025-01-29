import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';
import moleculeim from "../assets/mol.png";
import founderImage from "../assets/b1.png";
import founder1Image from "../assets/b2.png";
import founder2Image from "../assets/b3.png";
import founder3Image from "../assets/b4.png";
import indiaImage from "../assets/b5.png";
import mb1 from "../assets/carousel1.png";
import mb2 from "../assets/carousel2.png";
import mb3 from "../assets/carousel3.png";
import mb4 from "../assets/carousel4.png";
import mb5 from "../assets/carousel5.png";

const texts = ["Welcome to Oviya Medsafe", "Meticulosity", "Commitment", "Team Work", "Client Satisfaction"];
const images = [founderImage, founder1Image, founder2Image, founder3Image, indiaImage];
const smallDeviceImages = [mb1, mb2, mb3, mb4, mb5]; // Small device-specific images

function Banner() {
  const [currentText, setCurrentText] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size
    window.scroll(0,0)
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Bootstrap's small breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid bnpart p-0 m-0'>
      
      {isSmallScreen ? (
        // Carousel for small devices
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {smallDeviceImages.map((image, index) => (
              <div key={index} className={`carousel-item ${index === currentText ? 'active' : ''}`}>
                <img src={image} className="d-block w-100 img-fluid" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="saptext">{texts[index]}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        
        <div className="servicesbg pt-0 pt-md-5" id="ourservices">
          <div className="row pb-sm-5 pb-md-0 w-100">
            {/* Left side: Animated Text */}
            <div className="col-sm-12 col-md-7 col-lg-6 d-flex justify-content-center align-items-center">
              <motion.h4
                className="saptext text-light ms-0 ms-md-2 ps-5 text-center"
                key={currentText}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
              >
                {texts[currentText]}
              </motion.h4>
            </div>

            {/* Right side: Animated Image */}
            <div className="col-sm-12 col-md-5 col-lg-6 px-2 secondpart">
              <motion.img
                src={images[currentText]}
                alt={`Banner Image ${currentText + 1}`}
                className="rounded text-light bimg"
                key={currentText}
                initial={{ opacity: 0.4, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Rotating Molecule Images */}
      <motion.img
        src={moleculeim}
        alt="Rotating Image Top Left"
        className="rotating-img-left d-none d-lg-block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10 }}
      />
      <motion.img
        src={moleculeim}
        alt="Rotating Image Top Right"
        className="rotating-img-right d-none d-lg-block"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10 }}
      />
    </div>
  );
}

export default Banner;
