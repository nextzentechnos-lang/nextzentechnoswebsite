import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-container glass-panel">
      <div className="navbar-content">
        {/* Branding Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Logo.png" alt="NextZen Logo" className="logo-img" />
          <span className="logo-text">Next<span className="orange-highlight">Zen Technos</span></span>
        </NavLink>

        {/* Desktop Links List */}
        <ul className="nav-links-desktop">
          <li>
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events" 
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="nav-btn-cta pulse-glowing"
            >
              Join Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`hamburger-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu Panel (Slides down on toggle) */}
      <div className={`nav-links-mobile glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-btn-mobile" onClick={closeMenu}>
          🏠 Home
        </NavLink>
        <NavLink to="/about" className="nav-btn-mobile" onClick={closeMenu}>
          ℹ️ About Us
        </NavLink>
        <NavLink to="/courses" className="nav-btn-mobile" onClick={closeMenu}>
          📚 Courses
        </NavLink>
        <NavLink to="/events" className="nav-btn-mobile" onClick={closeMenu}>
          🗓️ Events
        </NavLink>
        <NavLink to="/contact" className="nav-btn-mobile mobile-cta" onClick={closeMenu}>
          💬 Join Us
        </NavLink>
      </div>
    </nav>
  );
}
