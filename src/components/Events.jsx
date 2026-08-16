import React, { useState, useEffect, useRef } from 'react';
import use3DTilt from '../hooks/use3DTilt';
import './Events.css';
function EventCard({ event }) {
  const cardRef = useRef(null);
  use3DTilt(cardRef, 10);

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
      className="interactive-card event-card"
      onMouseMove={handleMouseMove}
    >
      <div className="event-badge-row">
        <span className="event-badge">{event.badge}</span>
        <span className="event-date-text">{event.date}</span>
      </div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-desc">{event.desc}</p>
      <div className="event-actions">
        {event.btnText === "Register Now" ? (
          <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn-primary event-btn">
            {event.btnText}
          </a>
        ) : (
          <button disabled className="btn-secondary event-btn-disabled">
            {event.btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const targetDate = new Date('2026-09-20T10:00:00+05:30'); // Next structural program
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const eventList = [
    {
      title: "3 Hours - Power BI Bootcamp",
      desc: "Comprehensive hands-on session covering dashboard creation and analytics fundamentals.",
      date: "📅 To Be Announced",
      badge: "Bootcamp",
      link: "#",
      btnText: "Stay Tuned"
    },
    {
      title: "Freelancing Career Workshop",
      desc: "Start your freelancing journey: find clients, build portfolios, and earn online.",
      date: "📅 To Be Announced",
      badge: "Workshop",
      link: "#",
      btnText: "Stay Tuned"
    },
    {
      title: "Developer Networking Meetup",
      desc: "Connect with like-minded developers, exchange ideas, and expand your professional network.",
      date: "📅 To Be Announced",
      badge: "Meetup",
      link: "#",
      btnText: "Stay Tuned"
    }
  ];

  return (
    <section id="events" className="events-section section-dark">
      <div className="bg-radial-gradient events-glow"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EVENTS</span>
          <h2>🚀 Upcoming Bootcamps & Workshops</h2>
          <p>Join our interactive learning sessions and level up your technical knowledge alongside industry experts.</p>
        </div>

        {/* Countdown Ticker */}
        <div className="countdown-container glass-panel fade-in-up">
          <div className="countdown-header">
            <span className="live-dot pulse-glowing"></span>
            <h4>Next Internship Cohort Begins In:</h4>
          </div>
          <div className="countdown-timer">
            <div className="countdown-segment">
              <span className="timer-number">{String(timeLeft.days || 0).padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="countdown-segment">
              <span className="timer-number">{String(timeLeft.hours || 0).padStart(2, '0')}</span>
              <span className="timer-label">Hours</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="countdown-segment">
              <span className="timer-number">{String(timeLeft.minutes || 0).padStart(2, '0')}</span>
              <span className="timer-label">Mins</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="countdown-segment">
              <span className="timer-number">{String(timeLeft.seconds || 0).padStart(2, '0')}</span>
              <span className="timer-label">Secs</span>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="card-grid">
          {eventList.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
