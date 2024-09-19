import React from 'react';
import '../Style/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img
            src="https://www.aicte-jk-scholarship-gov.in/img/AICTE_full_logo.png" // replace with the actual DigiLocker logo URL
            alt="DigiLocker Logo"
            className="PMSSS-logo"
          />
          <p>
          PMSSS is a scholarship scheme for students from J&K and Ladakh to pursue technical and professional courses in India.
      
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Statistics</a></li>
            </ul>
            <ul>
            <li><a href="/">Resources</a></li>
            <li><a href="/">Circulars</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Careers</a></li>
          </ul>

          
        </div>

        <div className="footer-social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
            <a href="/"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024, Website maintained by MIMIT</p>
        <div className="footer-bottom-links">
          <a href="/">PMSSS Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
