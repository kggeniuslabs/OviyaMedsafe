import React, { useEffect } from 'react';
import founder1 from "../assets/bg1.png";
import founder2 from "../assets/Facebg.png";
import founder3 from "../assets/bg3.png";
import "./AboutFounder.css";
import { Helmet } from 'react-helmet-async';
function BoardMembers() {
  useEffect(()=>{
    window.scroll(0,0)
  })
  const boardMembers = [{
    name: 'Dr J Vijay Venkatraman',
    position: "Founder",
    bio: `MBBS, F. Diab., MBA, FPIPA (UK)<br/> Managing Director & CEO,<br/>Oviya MedSafe`,
    img: founder1
   }, {
    name: 'Dr V Janarthanan',
    position: "Chairman, Oviya MedSafe",
    bio: `MS, FICS, FAIS<br/>Chief Surgeon & Managing Director,<br/> KTVR Group Hospital <br/> Coimbatore, India`,
    img: founder3
   },
   {
    name: 'Dr C J Arun Raja',
    position:"Director, Oviya MedSafe",
    bio: `MS, D. Ortho., DNB (Ortho)<br/> Consultant Orthopaedic Surgeon,<br/> KTVR Group Hospital<br/> Coimbatore, India`,
    img: founder2
   }];

  return (
    <div className='container-fluid p-0 m-0 founderpart'>
      <Helmet>
                    <title>Oviya Medsafe Board of Directors | Experts in Healthcare and Data Security</title>
                    <meta name="description" content="Meet the board of directors at Oviya Medsafe. Our team of experts brings years of experience in healthcare, data security, and innovation to guide our mission in improving healthcare safety." />
                    <meta name="keywords" content="Oviya Medsafe Board, Healthcare Experts, Board of Directors, Medical Data Security, Healthcare Innovation, Data Security Leaders, Oviya Medsafe Leadership Team" />
                    <link rel="canonical" href="https://www.oviyamedsafe.com/our-board" />
                    <meta property="og:title" content="Oviya Medsafe Board of Directors | Experts in Healthcare and Data Security" />
                    <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
                    <meta property="og:url" content="https://www.oviyamedsafe.com/" />
                    <meta property="og:type" content="website" />
                  </Helmet>
      <h1 className='text-center subhead2 pb-3 pt-4'>Our Board</h1>
      <div className='boardpart'>
        <div className='container'>
          <div className='row text-center mx-2  py-5'>
            {boardMembers.map((member, index) => (
              <div className='col-sm-12 col-md-4 my-1' key={index}>
                <div className="card boardcard mx-1 mx-lg-2 border-0 h-100">
                  <img src={member.img} title="Oviya MedSafe Leadership – Driving Excellence in Drug Safety & Compliance" alt="Board members of Oviya MedSafe, representing leadership in global drug safety and pharmacovigilance
" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title boardcardtitle">{member.name}</h5>
                    <p className="card-text boardcardposition">{member.position}</p>
                    <p
                      className="card-text memberbio"
                      dangerouslySetInnerHTML={{ __html: member.bio.replace(/(?:\r\n|\r|\n)/g, '<br />') }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMembers;
