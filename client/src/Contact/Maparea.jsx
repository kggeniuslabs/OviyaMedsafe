import React from 'react';

function Maparea() {
  return (
    <div className="container-fluid m-0 p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1124559835844!2d76.92713197504555!3d11.030188789134405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858c8a7c5fcb9%3A0x68130739e0dea19!2sOviya%20MedSafe%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1679835431333!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Oviya MedSafe Location"
      ></iframe>
    </div>
  );
}

export default Maparea;
