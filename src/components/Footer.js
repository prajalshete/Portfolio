// Footer.js
import React from 'react';
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Prajal Shete. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
