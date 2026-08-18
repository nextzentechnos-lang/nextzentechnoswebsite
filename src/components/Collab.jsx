import React from 'react';
import './Collab.css';

export default function Collab() {
  return (
    <section id="collaboration" className="collab-section section-dark">
      <div className="bg-radial-gradient collab-glow-1"></div>
      
      <div className="container collab-container">
        {/* Content Box */}
        <div className="collab-content fade-in-up">
          <span className="section-tag">PARTNERSHIP</span>
          <h2>Strategic Collaboration</h2>
          
          <div className="partner-card glass-panel">
            <h3 className="partner-name">QuadSync Tech Solutions</h3>
            <p className="partner-tagline">“Synchronizing Innovations with Success”</p>
            <p className="collab-description">
              NextZen Technos partners with QuadSync Tech Solutions to deliver enterprise-aligned technical bootcamps, structured training curricula, and practical learning initiatives that align academic outcomes with modern industry standards.
            </p>
            <div className="collab-benefits">
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span>Joint Certification Frameworks</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span>Practitioner-Led Mentorship</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span>Production-Level Project Exposure</span>
              </div>
            </div>
            <a 
              href="https://www.quadsynctechsolutions.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary collab-btn"
            >
              Visit QuadSync Tech Solutions
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>

        {/* Visual Showcase (Animated Connection) */}
        <div className="collab-visual fade-in-up">
          <div className="connection-wrapper">
            <div className="collab-logo-box nextzen-box glass-panel">
              <img src="/Logo.png" alt="NextZen Logo" className="collab-logo" />
              <span>NextZen</span>
            </div>
            
            <div className="connection-line-container">
              <svg className="connection-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0,10 L 100,10" className="connection-bg-line" />
                <path d="M 0,10 L 100,10" className="connection-flow-line" />
              </svg>
            </div>

            
            <div className="collab-logo-box quadsync-box glass-panel">
              <img src="/quadsync_logo.jpeg" alt="QuadSync Tech Solutions Logo" className="collab-logo quadsync-img-logo" />
              <span>QuadSync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
