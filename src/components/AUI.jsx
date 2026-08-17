import React from 'react';
import './AUI.css';

const AUI = () => {
  const features = [
    {
      title: 'Agentic Workflows',
      description: 'Autonomous AI agent networks operating in harmony to solve complex enterprise engineering tasks.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      list: ['Multi-agent orchestration', 'Self-correcting feedback loops', 'High-speed execution']
    },
    {
      title: 'Adaptive Learning',
      description: 'Dynamic neural interfaces that adapt to team coding patterns and codebase conventions seamlessly.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      list: ['Context-aware suggestions', 'Custom taxonomy alignment', 'Zero-shot integration']
    },
    {
      title: 'Autonomous System Ops',
      description: 'End-to-end automated pipeline management, cloud deployment, and system diagnostics.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      list: ['Continuous monitoring', 'Auto-scaling pipelines', 'Instant crash-recovery']
    }
  ];

  return (
    <div className="aui-container">
      <div className="aui-hero">
        <span className="aui-badge">Next-Gen Architecture</span>
        <h2 className="aui-title">
          Agentic User Interface <span className="aui-gradient-text">(AUI)</span>
        </h2>
        <p className="aui-subtitle">
          Empowering teams with intelligent, self-evolving interface components driven by state-of-the-art agentic AI systems.
        </p>
      </div>

      <div className="aui-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="aui-card">
            <div className="aui-card-icon">
              {feature.icon}
            </div>
            <h3 className="aui-card-title">{feature.title}</h3>
            <p className="aui-card-desc">{feature.description}</p>
            <ul className="aui-card-features">
              {feature.list.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="aui-btn">
              Explore Capability
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AUI;
