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
          <title>Strategic Partnerships | Oviya MedSafe's Collaborative Approach</title>
          <meta name="description" content="Oviya MedSafe believes in strategic partnerships as a tool for sustainable value, bringing together technologies across industries to meet client needs and foster innovation." />
          <meta name="keywords" content="strategic partnerships, Oviya MedSafe, collaborative approach, industry innovation, client-focused solutions" />
          <link rel="canonical" href="https://www.oviyamedsafe.com/strategic-partnerships" />
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