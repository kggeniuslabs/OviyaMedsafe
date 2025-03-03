import React, { useEffect } from 'react'
import "./Careers.css"
import { Helmet } from 'react-helmet-async';
import { use } from 'react';
function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='container-fluid contactpart text-center text-light'>
      <Helmet>
        <title>Careers at Oviya MedSafe | Build Your Future in Pharmacovigilance</title>
        <meta name="description" content="Discover rewarding career opportunities at Oviya MedSafe. Join our expert team in pharmacovigilance and drug safety to make a meaningful impact in global healthcare." />
        <meta name="keywords" content="Oviya MedSafe careers, pharmacovigilance jobs, drug safety employment, regulatory affairs careers, join Oviya MedSafe, global healthcare careers" />
        <link rel="canonical" href="https://www.oviyamedsafe.com/careers" />
        <meta property="og:title" content="Careers at Oviya MedSafe | Join Our Pharmacovigilance Team" />
        <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
        <meta property="og:url" content="https://www.oviyamedsafe.com/" />
        <meta property="og:type" content="website" />
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