import React, { useRef } from 'react';
import use3DTilt from '../hooks/use3DTilt';
import './Services.css';

// Individual Tilt-Enabled Service Card Subcomponent
function ServiceCard({ service }) {
  const cardRef = useRef(null);
  use3DTilt(cardRef, 10); // Applies smooth 3D tilt

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="interactive-card service-card"
      onMouseMove={handleMouseMove}
    >
      <div className="service-icon-box">
        {service.icon}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
      <div className="card-border-glow"></div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <rect width="20" height="14" x="2" y="5" rx="2"/>
          <line x1="2" x2="22" y1="10" y2="10"/>
        </svg>
      ),
      title: "Placement & Opportunity Hub",
      desc: "Daily curated updates on off-campus recruitment drives, technical internships, and engineering summit opportunities."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Collaborative Developer Network",
      desc: "Connect with dedicated developers and mentors across colleges to work on projects and share knowledge."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: "Technical Bootcamps & Workshops",
      desc: "Hands-on, project-driven technical workshops covering core computer science principles, full-stack tools, and data analytics."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" x2="12.01" y1="17" y2="17"/>
        </svg>
      ),
      title: "Peer Doubt Support",
      desc: "A collaborative technical forum where engineering students and developers assist each other in resolving code issues."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10M6 10h10"/>
        </svg>
      ),
      title: "Structured Learning Programs",
      desc: "Industry-aligned learning modules covering Modern Software Engineering, Data Analytics, and Technical Foundations."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="bg-radial-gradient center-glow"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Our Core Initiatives</h2>
          <p>We provide the resources, framework, and guidance necessary for technical talent to succeed in modern industry roles.</p>
        </div>

        <div className="card-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
