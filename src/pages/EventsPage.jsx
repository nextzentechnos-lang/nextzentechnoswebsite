import React from 'react';
import Events from '../components/Events';

export default function EventsPage() {
  const pastEvents = [
    {
      title: "Data Visualization with Power BI",
      metric: "150+ Attendees",
      desc: "An intensive workshop covering data cleanup, modeling, and custom dashboard generation."
    },
    {
      title: "Introduction to Git & GitHub",
      metric: "300+ RSVPs",
      desc: "Hands-on bootcamp teaching version control, branch merging, and collaborative open-source contributions."
    },
    {
      title: "UI Design & Glassmorphism Basics",
      metric: "120+ Graduates",
      desc: "Explored advanced vanilla CSS design patterns, color palettes, and modern glass container cards."
    }
  ];

  return (
    <div className="events-page-view fade-in-up">
      {/* Renders dynamic upcoming events grid and countdown ticker */}
      <Events />

      {/* Past Events Highlights Panel */}
      <section className="past-events-section" style={{ paddingTop: '20px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">HISTORY</span>
            <h2>Past Event Highlights</h2>
            <p>Here is a brief look at some of the workshops and webinars we have conducted for our community.</p>
          </div>

          <div className="card-grid">
            {pastEvents.map((pe, idx) => (
              <div key={idx} className="interactive-card past-event-card">
                <span className="event-date-text" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px', display: 'block' }}>
                  {pe.metric}
                </span>
                <h3 className="past-event-title" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{pe.title}</h3>
                <p className="past-event-desc" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{pe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
