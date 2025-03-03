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
        <title>Drug Safety Services | End-to-End Pharmacovigilance & Regulatory Compliance</title>
        <meta name="description" content="Oviya MedSafe provides comprehensive drug safety services, including case processing, risk management, aggregate reporting, and post-marketing surveillance, ensuring regulatory compliance and patient safety." />
        <meta name="keywords" content="drug safety services, pharmacovigilance solutions, case processing, aggregate reporting, post-marketing surveillance, clinical safety, pharmaceutical risk management, regulatory compliance, Oviya MedSafe" />
        <link rel="canonical" href="https://oviyamedsafe.com/drug-safety-services" />
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