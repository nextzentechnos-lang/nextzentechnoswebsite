import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      
      {/* ======================================================== */}
      {/* 1. DESKTOP / LAPTOP NAVBAR                               */}
      {/* ======================================================== */}
      <div className="navbar-content glass-panel">
        <NavLink to="/" className="nav-logo">
          <img src="/Logo.png" alt="NextZen Logo" className="logo-img" />
          <span className="logo-text">Next<span className="orange-highlight">Zen Technos</span></span>
        </NavLink>

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
      </div>

      {/* ======================================================== */}
      {/* 2. PHONE TOP LOGO HEADER (Mobile View Only)             */}
      {/* ======================================================== */}
      <div className="navbar-mobile-header glass-panel">
        <NavLink to="/" className="nav-logo">
          <img src="/Logo.png" alt="NextZen Logo" className="logo-img" />
          <span className="logo-text">Next<span className="orange-highlight">Zen Technos</span></span>
        </NavLink>
      </div>

      {/* ======================================================== */}
      {/* 3. PHONE BOTTOM NAVIGATION TAB BAR (Mobile View Only)   */}
      {/* ======================================================== */}
      <div className="navbar-mobile-bottom-tabs glass-panel">
        <NavLink to="/" end className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <span className="mobile-tab-icon">🏠</span>
          <span className="mobile-tab-label">Home</span>
        </NavLink>
        
        <NavLink to="/about" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <span className="mobile-tab-icon">ℹ️</span>
          <span className="mobile-tab-label">About</span>
        </NavLink>
        
        <NavLink to="/courses" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <span className="mobile-tab-icon">📚</span>
          <span className="mobile-tab-label">Courses</span>
        </NavLink>
        
        <NavLink to="/events" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <span className="mobile-tab-icon">🗓️</span>
          <span className="mobile-tab-label">Events</span>
        </NavLink>
        
        <NavLink to="/contact" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <span className="mobile-tab-icon">💬</span>
          <span className="mobile-tab-label">Join</span>
        </NavLink>
      </div>

    </nav>
  );
}
