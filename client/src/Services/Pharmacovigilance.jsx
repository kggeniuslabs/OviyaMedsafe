import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'
import { Helmet } from 'react-helmet';

const Pharmacovigilance = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
      <Helmet>
        <title>Pharmacovigilance Consulting | Proactive Drug Safety & Compliance Strategies</title>
        <meta name="description" content="Oviya MedSafe’s Pharmacovigilance consulting services help pharmaceutical companies navigate regulatory complexities while ensuring patient safety and global compliance" />
        <meta name="keywords" content="Pharmacovigilance consulting, Oviya MedSafe, regulatory compliance, drug safety outcomes, pharmaceutical consulting services" />
        <link rel="canonical" href="https://www.oviyamedsafe.com/pharmacovigilance-consulting" />
      </Helmet>
        <DynamicServices index = {1} />
        <AccordianSection index = {1} />
    </div>
  )
}

export default Pharmacovigilance