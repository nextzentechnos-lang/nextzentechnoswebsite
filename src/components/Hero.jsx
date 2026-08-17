import React from 'react';
import './Hero.css';

export default function Hero({ onExploreCourses }) {
  return (
    <section id="home" className="hero-section">
      {/* Background Grid Accent */}
      <div className="bg-grid-effect"></div>
      <div className="bg-radial-gradient top-left-glow"></div>
      <div className="bg-radial-gradient bottom-right-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.35 1.4-1.9L4.5 16.5z"/><path d="M12 15l-3-3 7.35-7.35c.78-.78 2.05-.78 2.83 0v0c.78.78.78 2.05 0 2.83L12 15z"/></svg>
              Technology & Career Ecosystem
            </span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Connect. Learn.<br />Build. Lead.</span>
            <div className="dynamic-sub-word">
              Empowering Future Technology Leaders
            </div>
          </h1>
          
          <p className="hero-description">
            Welcome to <strong className="orange-highlight-text">NextZen Technos</strong> — an integrated technology ecosystem connecting aspiring engineers with structured training, technical mentorship, verified career opportunities, and collaborative innovation.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://chat.whatsapp.com/Cykv2WSysF09uCM1V5VenN" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary pulse-glowing"
            >
              Join WhatsApp Community
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button onClick={onExploreCourses} className="btn-secondary">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Executive Highlights Card */}
        <div className="hero-visual fade-in-up">
          <div className="hero-metrics-card glass-panel">
            <div className="metric-header-row">
              <span className="metric-header-tag">PLATFORM METRICS</span>
            </div>
            
            <div className="metrics-list-group">
              <div className="metric-list-item">
                <span className="metric-number">5,000+</span>
                <span className="metric-detail">Active Tech Members</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-list-item">
                <span className="metric-number">20+</span>
                <span className="metric-detail">Industry Mentors</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-list-item">
                <span className="metric-number">95%+</span>
                <span className="metric-detail">Program Completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down-indicator" onClick={onExploreCourses}>
        <span className="mouse-wheel-dot"></span>
      </div>
    </section>
  );
}
