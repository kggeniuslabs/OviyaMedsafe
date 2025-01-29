import React, { useEffect } from 'react'
import "./Careers.css"
import { Helmet } from 'react-helmet';
import { use } from 'react';
function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='container-fluid contactpart text-center text-light'>
      <Helmet>
        <title>Careers at Oviya MedSafe | Join Our Pharmacovigilance Team</title>
        <meta name="description" content="Explore career opportunities at Oviya MedSafe and join our dedicated team of professionals in the field of Pharmacovigilance and drug safety services." />
        <meta name="keywords" content="careers, Oviya MedSafe jobs, Pharmacovigilance careers, drug safety employment, join our team" />
        <link rel="canonical" href="https://www.oviyamedsafe.com/careers" />
      </Helmet>
       <div className='py-5'>
        <h1 className='text-light careershead pb-3'>Careers</h1>
        <h2 className='emptxt'>Empowering Your Future:</h2>
        <h2 className='emptxt'>Explore Exciting Career Opportunities With Us!</h2>
        
        </div>
    </div>
  )
}

export default Careers