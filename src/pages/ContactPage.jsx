import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Who can join the NextZen Technos community?",
      a: "Anyone interested in learning technology—including engineering students, self-taught developers, beginners, and junior engineers looking to expand their network and level up their skills."
    },
    {
      q: "Are the courses certified?",
      a: "Yes, upon completing the course modules, exercises, and final projects, you receive a joint certification of completion from NextZen Technos and QuadSync Tech Solutions."
    },
    {
      q: "How do I receive daily placement and job updates?",
      a: "All placement opportunities, internship alerts, and bootcamp notifications are shared directly inside our WhatsApp community channels. Simply click 'Join WhatsApp' to get access."
    },
    {
      q: "Is there a fee to join the community?",
      a: "No, joining our community, participating in networking, receiving placement updates, and basic doubt support are completely free. Structured certification courses have nominal pricing (starting from ₹99) to cover instructor and material costs."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.whatsapp.trim()) {
      tempErrors.whatsapp = "WhatsApp number is required.";
    } else if (!/^\d{10}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      tempErrors.whatsapp = "Please enter a valid 10-digit number.";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
    }
  };

  return (
    <div className="contact-page-view fade-in-up">
      <div className="bg-grid-effect"></div>
      <div className="bg-radial-gradient contact-glow"></div>

      <section className="contact-section-wrapper" style={{ paddingTop: 'clamp(0px, 5vw, 160px)', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">CONNECT</span>
            <h2>Get In Touch</h2>
            <p>Have questions about bootcamps, workshops, or partnerships? Drop us a message, and our team will get back to you shortly.</p>
          </div>

          <div className="contact-grid">
            {/* Contact Information Cards */}
            <div className="contact-info-panel">
              <div className="interactive-card info-card">
                <div className="info-icon">💬</div>
                <h4>WhatsApp Support</h4>
                <p>Chat with us for registration and program doubts.</p>
                <a href="https://wa.me/916301698365" target="_blank" rel="noopener noreferrer" className="info-link">
                  +91 63016 98365
                </a>
              </div>

              <div className="interactive-card info-card">
                <div className="info-icon">✉️</div>
                <h4>Email Inquiry</h4>
                <p>For partnership proposals and corporate collabs.</p>
                <a href="mailto:support@nextzentechnos.in" className="info-link">
                  support@nextzentechnos.in
                </a>
              </div>
            </div>

            {/* Glassmorphic Form Panel */}
            <div className="contact-form-container glass-panel">
              {submitted ? (
                <div className="form-success-overlay">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. A NextZen community representative will contact you on WhatsApp or Email shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      id="whatsapp"
                      name="whatsapp" 
                      value={formData.whatsapp} 
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={errors.whatsapp ? 'input-error' : ''}
                    />
                    {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help you?</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="4" 
                      value={formData.message} 
                      onChange={handleInputChange}
                      placeholder="Enter details of your query..."
                      className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SUPPORT</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our community, training schedules, and support.</p>
          </div>

          <div className="faq-accordion-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${activeFaq === idx ? 'faq-active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle-arrow">＋</span>
                </div>
                <div className="faq-answer-row">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
