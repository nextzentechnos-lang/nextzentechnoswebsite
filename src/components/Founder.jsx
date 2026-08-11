import React from 'react';
import './Founder.css';

export default function Founder() {
  return (
    <section id="about" className="founder-section">
      <div className="bg-radial-gradient founder-glow-1"></div>
      <div className="bg-radial-gradient founder-glow-2"></div>

      <div className="container founder-container">
        {/* Visual Frame of Founder */}
        <div className="founder-visual fade-in-up">
          <div className="image-frame-container">
            <div className="glowing-border-effect"></div>
            <img src="/CEO.jpeg" alt="Gumpina Sri Charan" className="founder-img" />
          </div>
          <div className="stats-glass-badge glass-panel">
            <span className="badge-title">Founder & CEO</span>
            <span className="badge-name">G. Sri Charan</span>
          </div>
        </div>

        {/* Content of Founder */}
        <div className="founder-content fade-in-up">
          <span className="section-tag">LEADERSHIP</span>
          <h2>Meet The Founder & CEO</h2>
          <p className="founder-role">Founder & CEO, NextZen Technos</p>
          
          <div className="divider-line"></div>
          
          <p className="founder-bio">
            Passionate about technology and community building, <strong>Gumpina Sri Charan</strong> founded <strong>NextZen Technos</strong> to help students learn real-world skills, connect with industry opportunities, and grow in their careers.
          </p>
          <p className="founder-bio">
            With a vision to empower students, he focuses on practical learning, industry exposure, and building a strong, collaborative tech community.
          </p>

          <div className="quote-box glass-panel">
            <p className="quote-text">
              "We don’t just share updates — we build careers, boost confidence, and empower the next generation of tech innovators."
            </p>
          </div>

          <div className="founder-actions">
            <a 
              href="https://www.linkedin.com/in/gumpina-sri-charan-70a699303" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
