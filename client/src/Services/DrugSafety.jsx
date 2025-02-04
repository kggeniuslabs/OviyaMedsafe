import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'
import { Helmet } from 'react-helmet-async';

const DrugSafety = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div >
      
      <Helmet>
        <title>Drug Safety Services | Comprehensive Solutions for Regulatory Compliance
        </title>
        <meta name="description" content="Oviya MedSafe offers expert drug safety services, including safety monitoring, case processing, and post-market surveillance to help pharmaceutical firms maintain compliance." />
        <meta name="keywords" content="drug safety services, Oviya MedSafe, safety reporting, clinical studies, post-marketing surveillance, pharmaceutical safety solutions" />
        <link rel="canonical" href="https://www.oviyamedsafe.com/drug-safety-services/" />
        <meta property="og:title" content="Drug Safety Services | Comprehensive Solutions for Regulatory Compliance" />
        <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
        <meta property="og:url" content="https://www.oviyamedsafe.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
        <DynamicServices index = {0} />
        <AccordianSection index = {0} />
    </div>
  )
}

export default DrugSafety