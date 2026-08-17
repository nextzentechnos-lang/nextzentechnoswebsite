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
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: "Daily Tech & Hiring Updates",
      desc: "Stay updated with job openings, internships, and placement opportunities from top tech companies."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
      ),
      title: "Hackathons & Event Alerts",
      desc: "Get timely notifications and preparation strategies for coding contests, hackathons, and tech events across India."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      ),
      title: "Project Doubt Support",
      desc: "Never get stuck. Gain instant coding support, logic building tips, and guidance for your academic and personal projects."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10M6 10h10"/>
        </svg>
      ),
      title: "Skill-Boosting Courses",
      desc: "Access structured, industry-oriented courses in Programming, Web Development, Freelancing, and AI launching soon."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="bg-radial-gradient center-glow"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Our Offerings</h2>
          <p>We supply resources, support, and programs designed to transform tech aspirants into professional engineers.</p>
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
