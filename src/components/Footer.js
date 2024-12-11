import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-logo">CAPTAVISTA</h1>
          <p>Stock and Investment information - CAPTION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
