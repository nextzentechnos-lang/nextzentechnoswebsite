import React from 'react';
import Founder from '../components/Founder';
import Collab from '../components/Collab';

export default function AboutPage() {
  return (
    <div className="about-page-view fade-in-up">
      {/* Page Header Introduction */}
      <section className="about-intro-section" style={{ paddingBottom: '20px', paddingTop: 'clamp(80px, 10vw, 160px)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-tag">ABOUT US</span>
            <h2>Empowering Tech Innovators</h2>
            <p>NextZen Technos is more than just updates; we are an ecosystem built to foster skill acquisition, logical thinking, and real-world project experience.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', border: '1px solid var(--border-card)' }}>
            <h3 style={{ color: 'var(--accent-orange)', marginBottom: '16px', fontSize: '1.4rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8' }}>
              We aim to bridge the gap between academic education and industry demands. By providing continuous job/internship updates, technical workshops, hands-on courses, and code debugging support, we ensure that every member of our community is equipped to lead the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <Founder />

      {/* Strategic Collaboration */}
      <Collab />
    </div>
  );
}
