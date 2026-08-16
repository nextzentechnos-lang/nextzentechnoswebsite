import React, { useState, useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';
import use3DTilt from '../hooks/use3DTilt';
import './Hero.css';

export default function Hero({ onExploreCourses }) {
  const [activeTab, setActiveTab] = useState('community.json');
  const [displayedText, setDisplayedText] = useState('');
  
  const heroCardRef = useRef(null);
  use3DTilt(heroCardRef, 14); // 3D tilt for hero visual card

  const tabContents = {
    'community.json': `{
  "status": "Online",
  "members": "5000+ Active Learners",
  "mentors": "20+ Industry Experts",
  "dailyJobAlerts": true,
  "doubtSupport": "24/7 Active"
}`,
    'placement.sh': `$ nextzen --fetch-jobs
[SUCCESS] 42 internship openings fetched!
[SUCCESS] 18 entry-level roles active.
[ALERT] hackathon alerts running.
$ _`,
    'metrics.py': `>>> print(NextZen.metrics)
96.4% placement & completion rate.
>>> print(NextZen.confidence_boost)
+250% average student progress.
>>> _`
  };

  useEffect(() => {
    let index = 0;
    const text = tabContents[activeTab];
    setDisplayedText('');

    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 12); // Fast, typewriter speed

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="home" className="hero-section">
      {/* Interactive Constellation Nodes Background */}
      <ParticleCanvas />
      
      <div className="bg-grid-effect"></div>
      <div className="bg-radial-gradient top-left-glow"></div>
      <div className="bg-radial-gradient bottom-right-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <div className="badge-wrapper">
            <span className="hero-badge">🚀 Next-Generation Tech Community</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Connect. Learn.<br />Build. Lead.</span>
          </h1>
          
          <p className="hero-description">
            Welcome to <strong className="orange-highlight-text">NextZen Technos</strong> — your gateway to a growing tech community where students, developers, and innovators connect, learn real-world skills, build practical projects, and lead the future of technology.
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

        {/* Visual interactive elements (Interactive Terminal Mockup) */}
        <div className="hero-visual fade-in-up">
          <div ref={heroCardRef} className="hero-visual-card glass-panel animated-float">
            {/* Terminal Header */}
            <div className="terminal-header-row">
              <div className="code-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title-text">console.log(NextZen)</span>
            </div>

            {/* Interactive File Tabs */}
            <div className="terminal-tabs">
              {Object.keys(tabContents).map((tabName) => (
                <button
                  key={tabName}
                  className={`terminal-tab-btn ${activeTab === tabName ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </button>
              ))}
            </div>

            {/* Typewriter Code Display */}
            <div className="code-snippet-body">
              <pre className="code-snippet-pre">{displayedText}</pre>
            </div>
          </div>
          
          <div className="floating-glow-circle circle-1"></div>
          <div className="floating-glow-circle circle-2"></div>
        </div>
      </div>

      <div className="scroll-down-indicator" onClick={onExploreCourses}>
        <span className="mouse-wheel-dot"></span>
      </div>
    </section>
  );
}
