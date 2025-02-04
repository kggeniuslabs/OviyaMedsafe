import React from 'react';
import "./Whatsapp.css";
import whatsappicon from "../../assets/whatsapp.png";

function Whatsapp() {
    const navigateToWhatsApp = (phoneNumber, countryCode = "+91") => {
        // Ensure phone number is properly formatted with country code
        const formattedNumber = `${countryCode}${phoneNumber}`;
        const whatsappUrl = `https://wa.me/${formattedNumber.replace(/\D/g, "")}`; 
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className='fixed-webinarpart'>  
            <p onClick={() => navigateToWhatsApp("8220763222", "+91")} className='iconwh'>
                <img src={whatsappicon} height="40px" alt="WhatsApp" />
            </p>
        </div>
    );
}

export default Whatsapp;