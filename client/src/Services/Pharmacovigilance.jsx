import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'
import { Helmet } from 'react-helmet-async';

const Pharmacovigilance = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
      <Helmet>
        <title>Pharmacovigilance Consulting | Expert Drug Safety & Regulatory Solutions </title>
        <meta name="description" content="Oviya MedSafe’s pharmacovigilance consulting services support pharmaceutical companies in achieving global regulatory compliance, optimizing drug safety processes, and mitigating risks to ensure patient safety." />
        <meta name="keywords" content="pharmacovigilance consulting, drug safety consulting, regulatory compliance, risk management, pharmaceutical consulting, global pharmacovigilance, safety signal detection, Oviya MedSafe" />
        <link rel="canonical" href="https://oviyamedsafe.com/pharmacovigilance-consulting" />
        <meta property="og:title" content="Pharmacovigilance Consulting | Proactive Drug Safety & Compliance Strategies" />
        <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
        <meta property="og:url" content="https://www.oviyamedsafe.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
        <DynamicServices index = {1} />
        <AccordianSection index = {1} />
    </div>
  )
}

export default Pharmacovigilance