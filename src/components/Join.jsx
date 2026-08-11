import React from 'react';
import './Join.css';

export default function Join() {
  return (
    <section id="contact" className="join-section">
      <div className="bg-radial-gradient join-glow"></div>
      
      <div className="container">
        <div className="join-panel glass-panel fade-in-up">
          <div className="join-content">
            <span className="section-tag neon-orange-text">GROW WITH US</span>
            <h2 className="join-title">Ready to Begin Your Tech Journey?</h2>
            <p className="join-desc">
              Join thousands of other student developers and tech enthusiasts in our community channels. Access immediate doubt support, daily placement alerts, event updates, and collaborate on real-world projects.
            </p>
          </div>

          <div className="join-actions">
            <a 
              href="https://chat.whatsapp.com/LNMW75oRmgy2dMGnwYbe1H" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary join-action-btn pulse-glowing"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Join WhatsApp Community
            </a>
            
            <a 
              href="https://www.instagram.com/next_zen_technos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-insta join-action-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
