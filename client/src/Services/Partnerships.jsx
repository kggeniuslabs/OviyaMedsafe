import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import StrategySection from './StrategySection'
import { Helmet } from 'react-helmet-async';

const Partnerships = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
        <Helmet>
          <title>Strategic Partnerships | Oviya MedSafe’s Industry Collaborations for Innovation</title>
          <meta name="description" content="Oviya MedSafe leverages strategic partnerships to deliver complementary healthcare and regulatory solutions, integrating technologies across industries to meet evolving client needs and drive innovation." />
          <meta name="keywords" content="strategic partnerships, Oviya MedSafe, industry collaborations, regulatory solutions, healthcare innovation, technology integration, client-focused partnerships" />
          <link rel="canonical" href="https://oviyamedsafe.com/strategic-partnerships" />
          <meta property="og:title" content="Strategic Partnerships | Oviya MedSafe's Collaborative Approach" />
          <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
          <meta property="og:url" content="https://www.oviyamedsafe.com/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <DynamicServices index = {2} />
        <StrategySection />
    </div>
  )
}

export default Partnerships