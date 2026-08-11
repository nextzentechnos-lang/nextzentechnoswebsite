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
        
        {/* Home Tab */}
        <NavLink to="/" end className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <svg className="mobile-tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="mobile-tab-label">Home</span>
        </NavLink>
        
        {/* About Tab */}
        <NavLink to="/about" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <svg className="mobile-tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span className="mobile-tab-label">About</span>
        </NavLink>
        
        {/* Courses Tab */}
        <NavLink to="/courses" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <svg className="mobile-tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
            <path d="M6 6h10M6 10h10"/>
          </svg>
          <span className="mobile-tab-label">Courses</span>
        </NavLink>
        
        {/* Events Tab */}
        <NavLink to="/events" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <svg className="mobile-tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          <span className="mobile-tab-label">Events</span>
        </NavLink>
        
        {/* Contact/Join Tab */}
        <NavLink to="/contact" className={({ isActive }) => `mobile-tab-item ${isActive ? 'active' : ''}`}>
          <svg className="mobile-tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span className="mobile-tab-label">Join</span>
        </NavLink>
      </div>

    </nav>
  );
}
