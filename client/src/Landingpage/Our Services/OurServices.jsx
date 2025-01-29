
import React, { useState} from "react";
import "./OurServices.css";

import serv2 from "../../assets/serv2.png";
import serv1 from "../../assets/serv4.png";
import serv3 from "../../assets/serv3.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as Sclink } from "react-scroll";

function OurServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };
  
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  
  const cardData = [
    {
      id: 1,
      link: "/drug-safety-services",
      image: serv1,
      title: `Drug Safety <br/> Services`,
      alt:"Pharmacovigilance Consultancy Services - Oviya MedSafe",
      tit:" Explore Pharmacovigilance Consultancy with Oviya MedSafe",
      newContent: "With in-depth expertise of safety reporting in clinical studies and post-marketing surveillance, Oviya MedSafe provides comprehensive global drug safety services. From individual customized stand-alone services to diverse complex offerings, Oviya MedSafe provides solutions specific to the requirements of our clients.",
    },
    {
      id: 2,
      link: "/Pharmacovigilance-consulting",
      image: serv2,
      title: `Pharmacovigilance <br/> Consulting`,
      alt:"Drug Safety Solutions - Oviya MedSafe",
      tit:"Comprehensive Drug Safety Solutions",
      newContent: "Oviya MedSafe offers comprehensive global Pharmacovigilance consulting solutions through regulatory compliance, higher productivity and strategic drug safety outcomes. Oviya MedSafe has the broad-based experience in Pharmacovigilance domain to help you address product safety concerns in a confident, proactive manner, and operating experience to provide unparalleled support to our clients.",
    },
    {
      id: 3,
      link: "/strategic-partnerships",
      image: serv3,
      title: `Strategic <br/> Partnerships`,
      alt:"Strategic Partnerships in Pharmacovigilance – Oviya MedSafe",
      tit:"Building strong alliances in the pharmaceutical industry through expertise and trust.",
      newContent: "Oviya MedSafe strongly believes strategic partnership as successful business tool with significant and sustainable value for all the parties in the alliance. Oviya MedSafe comes from rich background of entrepreneurship with 100 years of industry-leading knowledge in healthcare, education, engineering, and management domains. We understand better the competitive advantage in bringing technologies together across industries, engaging client’s needs, and harnessing collaborative knowledge of innovation. Our expertise in engagement strategies lies in flexibility and scalability of mutual individual needs of customers",
    },
  ];

  return (
    <div className="container">
      <div className="row py-3">
        <h1 className="subhead2">Our Services</h1>
        {cardData.map((card, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={card.id}>
            <Link to={card.link} className="text-decoration-none">
              <div
                className="card servicecard h-100"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredCard === index ? (
                  <div className="card-hover-content p-3 text-center">
                    <p style={{fontSize:"15px",textAlign:"justify"}} >{card.newContent}</p>
                  </div>
                ) : (
                  <>
                    <img
                      src={card.image}
                      className="card-img-top p-4"
                      title={card.tit}
                      alt={card.alt}
                      style={{ borderRadius: "8px" }}
                    />
                    <div className="card-body text-center">
                    <h3
  className="card-title blogbannerhead"
  dangerouslySetInnerHTML={{ __html: card.title }}
></h3>
                    </div>
                    <div className="circle-container">
                      <MdOutlineArrowOutward className="mb-2 me-2 text-light arw" />
                    </div>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;

