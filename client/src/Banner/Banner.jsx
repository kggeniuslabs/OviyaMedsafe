


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';
import moleculeim from "../assets/mol.png";
import founderImage from "../assets/b1.png";
import founder1Image from "../assets/b2.png";
import founder2Image from "../assets/b3.png";
import founder3Image from "../assets/b4.png";
import indiaImage from "../assets/b5.png";
import mb1 from "../assets/welcomebanner.png";
import mb2 from "../assets/carousel2.png";
import mb3 from "../assets/carousel3.png";
import mb4 from "../assets/carousel4.png";
import mb5 from "../assets/carousel5.png";
import { Helmet } from 'react-helmet-async';


const texts = [
  <>
    Welcome to<br /> Oviya MedSafe
  </>,
  "Meticulosity",
  "Commitment",
  "Team Work",
  <>
   Client <br /> Satisfaction
  </>


];


const images = [founderImage, founder1Image, founder2Image, founder3Image, indiaImage];
const smallDeviceImages = [mb1, mb2, mb3, mb4, mb5]; // Small device-specific images


function Banner() {
  const [currentText, setCurrentText] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    // Ensure scroll resets on component mount
    window.scroll(0, 0);


    // Handle screen resizing
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
    <>
      <Helmet>
        <title>Welcome to Oviya MedSafe</title>
        <meta name="description" content="Explore top-notch pharmacovigilance consulting services at Oviya MedSafe.Our services include regulatory compliance, medical writing, clinical data management, and strategic partnerships to ensure drug safety and efficacy. Partner with our expert team for quality pharmacovigilance services in Coimbatore and beyond." />
        <meta name="keywords" content="pharmacovigilance consultancy, drug safety services, medical writing, clinical data management, regulatory compliance, Oviya MedSafe, pharmacovigilance consulting, strategic partnerships, pharmaceutical consulting, global drug safety, drug safety physician, pharmacovigilance scientist, pharmacovigilance consulting in coimbatore, drug safety service in coimbatore." />
        <meta name='author' author="Oviya MedSafe"/>
        <link rel="canonical" href="https://www.oviyamedsafe.com/" />
        <meta property="og:title" content="Global Pharmacovigilance Consulting & Drug Safety Services | Oviya MedSafe" />
        <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
        <meta property="og:url" content="https://www.oviyamedsafe.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
          // Main Banner for Larger Screens
          <div className="servicesbg pt-0 pt-md-5" id="ourservices">
            <div className="row pb-sm-5 pb-md-0 w-100 d-flex justify-content-evenly">
              {/* Left side: Animated Text */}
              <div className="col-sm-12 col-md-8 col-lg-6 d-flex justify-content-center align-items-center">
                <motion.h4
                  className="saptext text-light text-justify  ms-0 ms-lg-5 ps-0 ps-lg-5"
                  key={currentText}
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1 }}>
                  {texts[currentText]}
                </motion.h4>
              </div>


              {/* Right side: Animated Image */}
              <div className="col-sm-12 col-md-4 col-lg-6 px-2 secondpart">
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
    </>
    
  );
}


export default Banner;




