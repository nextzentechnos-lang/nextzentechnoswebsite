import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/Logo.png" alt="NextZen Logo" className="footer-logo-img" />
            <div className="logo-text-group">
              <span className="logo-text">Next<span className="orange-highlight">Zen</span> <span className="white-technos">Technos</span></span>
              <span className="logo-subtitle">EdTech</span>
            </div>
          </div>
          <p className="footer-tagline">Connect. Learn. Build. Lead.</p>
          <p className="footer-desc">
            NextZen Technos is a premier tech community helping students and developers grow through placement updates, technical events, hands-on courses, and networking opportunities.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-link-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="footer-link-col">
            <h4>Social Channels</h4>
            <ul>
              <li>
                <a href="https://chat.whatsapp.com/LNMW75oRmgy2dMGnwYbe1H" target="_blank" rel="noopener noreferrer">
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/next_zen_technos" target="_blank" rel="noopener noreferrer">
                  Instagram Channel
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gumpina-sri-charan-70a699303" target="_blank" rel="noopener noreferrer">
                  Founder LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© {currentYear >= 2026 ? currentYear : 2026} NextZen Technos. All Rights Reserved.</p>
          <p className="designed-text">Synchronizing Innovations with Success</p>
        </div>
      </div>
    </footer>
  );
}
