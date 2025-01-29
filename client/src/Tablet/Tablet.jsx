import React from 'react'
import tab1 from "../assets/tablet1.png";
import tab2 from "../assets/tablet2.png";
import "./Tablet.css";
function Tablet() {
  return (
    <div className='d-flex bgpart'>
    
        <div className='movingtablet'>
        <img src={tab1}/>
        </div>
        <div className='movingtablet2'>
        <img src={tab2}/>
        </div>
      
    </div>
  )
}

export default Tablet