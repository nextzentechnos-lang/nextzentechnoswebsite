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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => localStorage.getItem('nz-theme') || 'orange');

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setThemeOpen(false);
  };

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
    <nav className="navbar-container glass-panel">
      <div className="navbar-content">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Logo.png" alt="NextZen Logo" className="logo-img" />
          <span className="logo-text">Next<span className="orange-highlight">Zen</span></span>
        </NavLink>

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger Toggle */}
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

      {/* Mobile Menu */}
      <div className={`nav-links-mobile glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-btn-mobile" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className="nav-btn-mobile" onClick={closeMenu}>About Us</NavLink>
        <NavLink to="/courses" className="nav-btn-mobile" onClick={closeMenu}>Courses</NavLink>
        <NavLink to="/events" className="nav-btn-mobile" onClick={closeMenu}>Events</NavLink>
        
        {/* Mobile Theme Selection Row */}
        <div className="mobile-theme-row">
          <span>Theme:</span>
          <div className="mobile-theme-buttons">
            {themes.map((t) => (
              <button
                key={t.key}
                className={`mobile-theme-dot ${activeTheme === t.key ? 'active' : ''}`}
                style={{ background: `linear-gradient(135deg, ${t.orange}, ${t.pink})` }}
                onClick={() => { setActiveTheme(t.key); }}
                title={t.name}
              />
            ))}
          </div>
        </div>

        <NavLink to="/contact" className="nav-btn-mobile mobile-cta" onClick={closeMenu}>Join Us</NavLink>
      </div>
    </nav>
  );
}
