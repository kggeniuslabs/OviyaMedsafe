
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
      newContent: "Oviya MedSafe offers comprehensive outsourced Drug Safety services designed to support the entire lifecycle of Pharmacovigilance activities. With expertise in both post-marketing safety monitoring and clinical trial safety, we provide customized solutions tailored to meet the specific needs of our clients. From the management of Individual Case Safety Reports (ICSRs) to regulatory compliance with risk management plans, our services ensure seamless integration of safety practices across global markets. Whether it is signal detection, aggregate report writing, or local regulatory support, Oviya MedSafe helps organizations navigate the complexities of drug safety while ensuring patient safety and compliance at every stage.",
    },
    {
      id: 2,
      link: "/Pharmacovigilance-consulting",
      image: serv2,
      title: `Pharmacovigilance <br/> Consulting`,
      alt:"Drug Safety Solutions - Oviya MedSafe",
      tit:"Comprehensive Drug Safety Solutions",
      newContent: "Oviya MedSafe provides comprehensive global Pharmacovigilance Consulting services designed to ensure regulatory compliance, enhance productivity, and achieve strategic Drug Safety outcomes. With extensive expertise across the Pharmacovigilance domain, Oviya MedSafe empowers its clients to address Product Safety concerns confidently and proactively. Whether it is establishing robust systems, supporting audit readiness, leveraging technology and AI, or deploying specialized staff, we deliver unparalleled, tailored solutions to meet your unique needs.",
    },
    {
      id: 3,
      link: "/strategic-partnerships",
      image: serv3,
      title: `Strategic <br/> Partnerships`,
      alt:"Strategic Partnerships in Pharmacovigilance – Oviya MedSafe",
      tit:"Building strong alliances in the pharmaceutical industry through expertise and trust.",
      newContent: "At Oviya MedSafe, we believe in the power of strategic partnerships to create significant, sustainable value for all parties involved. Leveraging our extensive network of industry connections and alliances, we are able to offer a range of services that complement our core Pharmacovigilance expertise. These partnerships allow us to provide clients with solutions outside the traditional Pharmacovigilance domain, yet closely aligned with it.",
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

