import React from 'react'
import "./Whatsapp.css";
import whatsappicon from "../../assets/whatsapp.png";
import { Link } from 'react-router-dom';

function Whatsapp() {
    const navigateToWhatsApp = (phoneNumber) => {
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        // Open the WhatsApp chat
        window.open(whatsappUrl, "_blank");
      };
  return (
    <div className='fixed-webinarpart'>  
  
<p onClick={() => navigateToWhatsApp("8220763222")} className='iconwh'><img src={whatsappicon} height={"40px"}/></p>
     


    </div>
  )
}

export default Whatsapp





