import React, { useState } from 'react';
import logoImage from '../../assets/logo1.png'
import './Navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Image */}
        <div className="logo">
          <img src= {logoImage} alt="Digital Marketing Logo" className="logo-img" />
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
  {['hero', 'about', 'services', 'pricing', 'founders', 'contact'].map((section) => (
    <li key={section}>
      <a href={`#${section}`} onClick={() => setIsMenuOpen(false)}>
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    </li>
  ))}
</ul>


        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
