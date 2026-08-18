import React from 'react';
import './DataAnalystPromo.css';

export default function DataAnalystPromo() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfu3pf3yfbMCApAIYUOxmS0daXqdFWlwmxihIjL5UbcuGLUmQ/viewform?usp=header";

  const techStack = [
    { 
      name: "Excel with AI", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg> 
    },
    { 
      name: "SQL", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg> 
    },
    { 
      name: "Python", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> 
    },
    { 
      name: "Power BI", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg> 
    },
    { 
      name: "NumPy", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg> 
    },
    { 
      name: "Pandas", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/><path d="M6 18h.01M10 14h.01M14 10h.01M18 6h.01"/></svg> 
    },
    { 
      name: "Matplotlib", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> 
    },
    { 
      name: "Seaborn", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12s1.5-2 4-2 4 2 4 2"/></svg> 
    },
    { 
      name: "Data Analysis", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> 
    },
    { 
      name: "Statistics", 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg> 
    }
  ];

  const whatYouGet = [
    {
      title: "8-Week Structured Curriculum",
      desc: "Comprehensive roadmap designed by industry practitioners from basic to advanced data analytics.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
      )
    },
    {
      title: "Live + Recorded Sessions",
      desc: "Interactive live classes with lifetime access to high-definition recordings.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>
      )
    },
    {
      title: "Dedicated Doubt Support",
      desc: "Daily Q&A sessions to solve code errors, logic blocks, and project questions.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      )
    },
    {
      title: "Weekly Skill Assessments",
      desc: "Hands-on quizzes and coding challenges to test your retention and problem-solving.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      )
    },
    {
      title: "2 Industry-Oriented Projects",
      desc: "Build portfolio-ready end-to-end data pipelines and Power BI dashboards.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
      )
    },
    {
      title: "Complimentary Bootcamps",
      desc: "Free access to live masterclasses on AI tools, freelancing, and career acceleration.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      )
    },
    {
      title: "Professional Resume Building",
      desc: "ATS-optimized resume templates and project highlight strategies for recruiters.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
      )
    },
    {
      title: "Job Profile & LinkedIn Setup",
      desc: "Optimize your LinkedIn, GitHub, and job portal profiles for inbound opportunities.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    {
      title: "Interview Prep & Mock Technicals",
      desc: "1-on-1 interview practice, common SQL/Python questions, and scenario challenges.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Placement Support",
      desc: "Job application tracking, referral alerts, and portfolio presentation guidance.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      )
    },
    {
      title: "Verified Training Certificate",
      desc: "Industry-recognized certificate of completion from NextZen Technos & QuadSync.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: "2-Month Internship Certificate",
      desc: "Official practical experience certificate detailing your hands-on project work.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
      )
    }
  ];

  const batchDetails = [
    { label: "START DATE", val: "01 September 2026", sub: "Upcoming Cohort" },
    { label: "DURATION", val: "8 Weeks", sub: "2 Months Intensive" },
    { label: "DAILY SESSIONS", val: "2 Hours", sub: "Monday – Friday" },
    { label: "BATCH SIZE", val: "20 Seats", sub: "Limited Intimate Batch" },
    { label: "MODE", val: "Live + Recorded", sub: "Interactive Classroom" },
    { label: "ACCESS", val: "Lifetime Access", sub: "All LMS Recordings" }
  ];

  const scrollToDetails = () => {
    const el = document.getElementById("da-details");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="data-analyst-program" className="da-section">
      <div className="bg-radial-gradient da-glow-top"></div>
      <div className="bg-radial-gradient da-glow-bottom"></div>

      <div className="container">
        
        {/* HERO PROMOTIONAL BANNER */}
        <div className="da-hero-card glass-panel fade-in-up">
          <div className="da-hero-badge-row">
            <span className="da-flag-badge">
              INDEPENDENCE DAY SPECIAL OFFER
            </span>
            <div className="da-partner-hero-badge">
              <span className="da-partner-hero-label">Training Partner:</span>
              <img src="/quadsync_logo.jpeg" alt="QuadSync Tech Solutions Logo" className="da-partner-hero-logo" />
              <span className="da-partner-hero-name">QuadSync Tech Solutions</span>
            </div>
            <span className="da-seats-badge">
              Limited Batch — 20 Seats Only
            </span>
          </div>

          <div className="da-hero-content-grid">
            <div className="da-hero-main-text">
              <span className="da-subheadline">BECOME JOB-READY IN 60 DAYS</span>
              <h2 className="da-program-title">
                Industry-Oriented <br />
                <span className="gradient-text">Data Analyst</span> Training
              </h2>
              
              <p className="da-hero-desc">
                Industry-focused training designed to build practical data analytics skills, real-world project experience, and career readiness.
              </p>

              <div className="da-hero-cta-group">
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary da-hero-btn pulse-glowing"
                >
                  ENROLL NOW — ₹999
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                
                <button onClick={scrollToDetails} className="btn-secondary da-details-btn">
                  View Program Details
                </button>
              </div>
              <p className="da-guarantee-note">Offer valid till 18 August 2026 • Fast enrollment</p>
            </div>

            {/* HERO QUICK OFFER BOX */}
            <div className="da-hero-pricing-box glass-panel">
              <div className="da-pricing-tag">SPECIAL PROMO</div>
              <div className="da-price-strike">₹2,499</div>
              <div className="da-current-price">₹999</div>
              <div className="da-save-badge">SAVE ₹1,500 (60% OFF)</div>
              
              <div className="da-mini-specs">
                <div className="mini-spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Starts: 01 Sept 2026</span>
                </div>
                <div className="mini-spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  <span>20 Seats Batch</span>
                </div>
              </div>

              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary da-pricing-box-btn"
              >
                Claim Offer Now
              </a>
            </div>
          </div>
        </div>

        {/* 2. TECHNOLOGY STACK BAR */}
        <div className="da-tech-stack-wrapper fade-in-up">
          <h3 className="da-tech-title">Technologies & Tools You Will Master</h3>
          <div className="da-tech-grid">
            {techStack.map((tech, idx) => (
              <div key={idx} className="da-tech-item glass-panel">
                <span className="da-tech-icon">{tech.icon}</span>
                <span className="da-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILED FEATURES ANCHOR */}
        <div id="da-details" style={{ paddingTop: '20px' }}></div>

        {/* 3. BATCH DETAILS CARD GRID */}
        <div className="da-batch-section fade-in-up">
          <div className="section-header">
            <span className="section-tag">COHORT SCHEDULE</span>
            <h2>Program Specifications</h2>
            <p>Structure engineered for working students and fresh graduates.</p>
          </div>

          <div className="da-batch-grid">
            {batchDetails.map((b, idx) => (
              <div key={idx} className="da-batch-card glass-panel">
                <span className="da-batch-label">{b.label}</span>
                <div className="da-batch-val">{b.val}</div>
                <span className="da-batch-sub">{b.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. WHAT YOU'LL GET FEATURE GRID */}
        <div className="da-features-section fade-in-up">
          <div className="section-header">
            <span className="section-tag">CURRICULUM & BENEFITS</span>
            <h2>What You Will Receive</h2>
            <p>Comprehensive training, project portfolio, and career-readiness package.</p>
          </div>

          <div className="da-features-grid">
            {whatYouGet.map((feat, idx) => (
              <div key={idx} className="da-feature-card glass-panel">
                <div className="da-feature-icon">{feat.icon}</div>
                <div className="da-feature-info">
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PLACEMENT DISCLAIMER */}
          <div className="da-disclaimer-box">
            <p className="da-disclaimer-text">
              *<strong>Placement Support Disclaimer:</strong> Placement support includes resume building, portfolio development, interview preparation, and job application guidance; it does not guarantee placement.
            </p>
          </div>
        </div>

        {/* 5. FINAL PRICING & ENROLLMENT CTA CARD */}
        <div className="da-final-pricing-card glass-panel fade-in-up">
          <div className="da-pricing-header">
            <span className="da-pricing-badge">INDEPENDENCE DAY SPECIAL OFFER</span>
            <h3>Lowest Fee Ever — Limited Batch</h3>
            <p className="da-promo-motto">"Industry-focused. Skill-driven. Career ready."</p>
          </div>

          <div className="da-pricing-main">
            <div className="da-price-tag-group">
              <span className="da-old-price">Standard Fee: ₹2,499</span>
              <div className="da-big-price">
                ₹999 <span className="da-only-label">ONLY</span>
              </div>
              <div className="da-savings-highlight">SAVE ₹1,500 (Offer valid till 18 August 2026)</div>
            </div>

            <div className="da-pricing-action">
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary da-final-cta-btn pulse-glowing"
              >
                ENROLL NOW — ₹999
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <p className="da-seats-counter">20 Seats Limit • Registrations Closing Soon</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
