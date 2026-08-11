import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

// Premium Themes Configuration
const themes = [
  { name: 'Sunset Orange', key: 'orange', orange: '#ff7a00', pink: '#ff007f', purple: '#8a2be2' },
  { name: 'Cyber Cyan', key: 'cyan', orange: '#00e5ff', pink: '#0066ff', purple: '#8a2be2' },
  { name: 'Retrowave Pink', key: 'pink', orange: '#ff007f', pink: '#aa00ff', purple: '#00e5ff' },
  { name: 'Emerald Mint', key: 'green', orange: '#00f5a0', pink: '#00d2ff', purple: '#8a2be2' }
];

// Helper to convert hex to rgb
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '255, 122, 0';
}

export default function Navbar() {
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => localStorage.getItem('nz-theme') || 'orange');

  // Theme apply hook
  useEffect(() => {
    const theme = themes.find(t => t.key === activeTheme) || themes[0];
    const root = document.documentElement;
    root.style.setProperty('--accent-orange', theme.orange);
    root.style.setProperty('--accent-pink', theme.pink);
    root.style.setProperty('--accent-purple', theme.purple);
    root.style.setProperty('--border-card-hover', `rgba(${hexToRgb(theme.orange)}, 0.45)`);
    localStorage.setItem('nz-theme', activeTheme);
  }, [activeTheme]);

  return (
    <nav className="navbar-container">
      
      {/* ======================================================== */}
      {/* 1. DESKTOP / LAPTOP NAVBAR                               */}
      {/* ======================================================== */}
      <div className="navbar-content glass-panel">
        <NavLink to="/" className="nav-logo">
          <img src="/Logo.png" alt="NextZen Logo" className="logo-img" />
          <span className="logo-text">Next<span className="orange-highlight">Zen</span></span>
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
          
          {/* Custom Theme Switcher trigger */}
          <li className="theme-switcher-wrapper">
            <button 
              className="theme-toggle-trigger" 
              onClick={() => setThemeOpen(!themeOpen)}
              aria-label="Customize accent colors"
              title="Customize glow accent theme"
            >
              <span className="theme-dot dot-1"></span>
              <span className="theme-dot dot-2"></span>
              <span className="theme-dot dot-3"></span>
            </button>
            
            {themeOpen && (
              <div className="theme-dropdown-menu glass-panel">
                <h4>Accent Glow Color</h4>
                <div className="theme-options-grid">
                  {themes.map((t) => (
                    <button 
                      key={t.key} 
                      className={`theme-option-btn ${activeTheme === t.key ? 'active' : ''}`}
                      onClick={() => { setActiveTheme(t.key); setThemeOpen(false); }}
                    >
                      <span className="option-color-preview" style={{ background: `linear-gradient(135deg, ${t.orange}, ${t.pink})` }}></span>
                      <span className="option-name">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
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
          <span className="logo-text">Next<span className="orange-highlight">Zen</span></span>
        </NavLink>

        {/* Theme Switcher inside mobile top header */}
        <div className="theme-switcher-wrapper">
          <button 
            className="theme-toggle-trigger" 
            onClick={() => setThemeOpen(!themeOpen)}
            aria-label="Customize accent colors"
          >
            <span className="theme-dot dot-1"></span>
            <span className="theme-dot dot-2"></span>
            <span className="theme-dot dot-3"></span>
          </button>
          
          {themeOpen && (
            <div className="theme-dropdown-menu glass-panel">
              <h4>Accent Glow</h4>
              <div className="theme-options-grid">
                {themes.map((t) => (
                  <button 
                    key={t.key} 
                    className={`theme-option-btn ${activeTheme === t.key ? 'active' : ''}`}
                    onClick={() => { setActiveTheme(t.key); setThemeOpen(false); }}
                  >
                    <span className="option-color-preview" style={{ background: `linear-gradient(135deg, ${t.orange}, ${t.pink})` }}></span>
                    <span className="option-name">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
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
