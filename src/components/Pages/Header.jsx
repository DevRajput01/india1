import React from 'react';
import '../Style/Header.css';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <p>Thursday, September 20, 2024 </p>
        <div className="top-bar-right">
          <a href="/">Screen Reader Access</a>
          <span> | </span>
          <a href="/">Text Size</a>
          <button>A-</button>
          <button>A</button>
          <button>A+</button>
          <span> | </span>
          <a href="/">हिंदी</a>
        </div>
      </div>

      {/* Logo and Title Section */}
      <div className="logo-title-section">
        <div className="logo">
          <img
            src="https://www.aicte-india.org/sites/default/files/logo_new.png" // Replace with actual AICTE logo link
            alt="AICTE Logo"
          />
        </div>
        <div className="title">
          {/* <h5>All India Council for Technical Education</h5> */}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/"> Who can Apply</a></li>
          <li><a href="/">Approved List of College for Pmsss</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Guidelines</a></li>
          <li><a href="/">User Manuals</a></li>
          <li><a href="/">Important Notice</a></li>
          <li><a href="/">AICTE</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
