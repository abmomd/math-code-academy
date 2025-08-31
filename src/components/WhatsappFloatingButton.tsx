import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";


const WhatsappFloatingButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919586753377"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
      <span className="whatsapp-text">Contact Now</span>
    </a>
  );
};

export default WhatsappFloatingButton;
