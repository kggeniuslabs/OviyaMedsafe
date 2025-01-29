import React from 'react';
import founderimg from "../assets/Founderoviya.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Founder.css";
import { Helmet } from 'react-helmet';

function Founder() {
  return (

    <div className="container-fluid abtparts">
      <Helmet>
                    <title>Founder of Oviya Medsafe | Visionary Leadership in Healthcare Safety</title>
                    <meta name="description" content="Discover the story behind our founder Dr J Vijay Venkatraman who is a Diabetologist, Drug Safety Physician and Entrepreneur, with 2 decades of experience.  Understand his vision for Oviya MedSafe and his commitment to advancing healthcare safety." />
                    <meta name="keywords" content="Oviya Medsafe Founder, Healthcare Leadership, Medical Data Protection, Founder Story, Healthcare Innovation, Visionary Leadership, Oviya Medsafe Team." />
                    <link rel="canonical" href="https://www.oviyamedsafe.com/our-founder" />
                  </Helmet>
      <h1 className='py-2 subhead2'>Our Founder</h1>
      <div className="row align-items-center mx-1 mx-lg-5">
        {/* Image Column */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
          <img 
            src={founderimg} 
            alt="Founder" 
            className="founderimg img-fluid ps-0 ps-md-5 ms-0 ms-md-5" 
            style={{ zIndex: 1000 }} 
          />
        </div>

        {/* Text Column */}
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
          <div className='fparts'>
          <h1 className="foundername ">Dr J Vijay Venkatraman</h1>
          <p className="pt-2 founderqualification ">
            MBBS, F. Diab., MBA, FPIPA (UK)<br />
            Managing Director & CEO,<br />
            Oviya MedSafe<br />
            <a 
              href="https://www.linkedin.com/in/drjvvr/" 
              className="text-start text-decoration-none text-dark" 
              style={{ fontSize: "18px" }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedicon pe-2"  style={{ fontSize: "16px" }} />
              Get in touch
            </a>
          </p>
          </div>
          </div>
          <div className='row text-justify founderparas py-3 textjust'>
          <p>
            Dr J Vijay Venkatraman is a Diabetologist, Drug Safety Physician and Entrepreneur, with 25 years of experience. He holds an MBA degree in Services Management. He is the first Indian to have been conferred the Fellowship of the Pharmaceutical Information & Pharmacovigilance Association (PIPA), United Kingdom.
          </p>
          <p>
            Dr Vijay founded Oviya MedSafe, a global Pharmacovigilance consulting & Drug Safety services providing company incorporated in Coimbatore, India and London, UK, which has been fulfilling the compliance needs of the Pharmaceutical industry since 2012.
          </p>
          <p>
            Dr Vijay has held the honorary position ‘Regional Editor, India’ of 
            <i> Global Forum</i>, the official magazine of the Drug Information Association (DIA) since April 2017. He served as the Chairman of the Indian Medical Association (IMA) Headquarters’ Standing Committee for Pharmacovigilance for the year 2021. He was the Chair of the Pharmacovigilance Council of the Indian Society for Clinical Research (ISCR) since the inception of the council in April 2015 until 2019.
          </p>
          <p>
            Dr Vijay has been an invited faculty in conferences around the world. He has numerous publications to his credit and has often been featured in the media. He is a member of several professional associations and is actively involved in promoting Pharmacovigilance awareness among all stakeholders of the discipline.
          </p>
          <p>
            Dr Vijay is a recipient of many awards including the ‘Leadership Excellence Award’ and the ‘State Appreciation Award for Co-ordinating Academic Activities’ by the Indian Medical Association.
          </p>
        </div>
      </div>
      </div>
  
  );
}

export default Founder;