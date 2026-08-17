import React, { useState, useMemo, useRef } from 'react';
import use3DTilt from '../hooks/use3DTilt';
import './Courses.css';

// Individual tilt-enabled Course Card Subcomponent
function CourseCard({ course, getLevelColorClass }) {
  const cardRef = useRef(null);
  use3DTilt(cardRef, 8); // Gentler tilt for standard-sized cards

  return (
    <div ref={cardRef} className={`interactive-card course-card fade-in-up ${course.featured ? 'featured-course-card' : ''}`}>
      {course.featured && (
        <div className="featured-banner-tag">
          {course.badgeText || "FEATURED PROGRAM"}
        </div>
      )}
      <div className="course-card-header">
        <span className={`course-level-badge ${getLevelColorClass(course.level)}`}>
          {course.level}
        </span>
        <span className="course-duration-text">⏱ {course.duration}</span>
      </div>
      
      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.desc}</p>
      
      <div className="course-card-details">
        <div className="course-price-row">
          <span className="price-label">Tuition Fee:</span>
          <div className="price-values-group">
            {course.oldPrice && <span className="price-old">{course.oldPrice}</span>}
            <span className="price-value">{course.price}</span>
          </div>
        </div>
      </div>

      <div className="course-card-actions">
        <a 
          href={course.registerLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary course-action-btn"
        >
          Enroll Now
        </a>
        <a 
          href={course.detailLink} 
          target={course.detailLink.startsWith('http') ? "_blank" : "_self"} 
          rel="noopener noreferrer" 
          className="btn-secondary course-action-btn"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const courseList = [
    {
      title: "Industry-Oriented Data Analyst Program",
      level: "Career Track",
      duration: "8 Weeks (2 Months)",
      price: "₹999",
      oldPrice: "₹2,499",
      desc: "Become job-ready in 60 days. Master Excel with AI, SQL, Python, Power BI, NumPy, Pandas, Matplotlib, Seaborn & Statistics with live classes, 2 industry projects & placement support.",
      category: "Data & AI",
      featured: true,
      badgeText: "INDEPENDENCE DAY OFFER",
      detailLink: "/#data-analyst-program",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfu3pf3yfbMCApAIYUOxmS0daXqdFWlwmxihIjL5UbcuGLUmQ/viewform?usp=header"
    },
    {
      title: "C Programming",
      level: "Beginner",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Learn fundamental coding concepts, logic building, and problem-solving using C.",
      category: "Programming",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Python Programming",
      level: "Beginner to Intermediate",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Master Python programming for automation, scripting, and foundations of data science.",
      category: "Programming",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Java Programming",
      level: "Beginner to Intermediate",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Build object-oriented programming (OOP) structures and solve DSA basics using Java.",
      category: "Programming",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "DSA",
      level: "Intermediate",
      duration: "8 Weeks",
      price: "₹399",
      desc: "Master essential data structures and algorithms to crack coding rounds and technical interviews.",
      category: "Programming",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Frontend Development",
      level: "Beginner",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Create responsive and interactive web interfaces using HTML5, CSS3, and JavaScript.",
      category: "Web Dev",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Backend Development",
      level: "Intermediate",
      duration: "4 Weeks",
      price: "₹299",
      desc: "Build server-side logic, configure databases, and design RESTful APIs for applications.",
      category: "Web Dev",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Full Stack Web Development",
      level: "Beginner to Advanced",
      duration: "8 Weeks",
      price: "₹399",
      desc: "Get end-to-end web deployment experience. Transition from front-end building to database hosting.",
      category: "Web Dev",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Data Science",
      level: "Intermediate",
      duration: "8 Weeks",
      price: "₹399",
      desc: "Perform statistical analysis, clean complex datasets, and present insights using visual libraries.",
      category: "Data & AI",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Machine Learning",
      level: "Advanced",
      duration: "6 Weeks",
      price: "₹299",
      desc: "Implement predictive models, training algorithms, and evaluate neural architectures.",
      category: "Data & AI",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "AI Tools",
      level: "Beginner",
      duration: "2 Weeks",
      price: "₹99",
      desc: "Unleash maximum productivity by mastering state-of-the-art AI systems and LLM prompts.",
      category: "Data & AI",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Power BI",
      level: "Beginner",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Design professional business intelligence dashboards, compile datasets, and analyze performance metrics.",
      category: "Data & AI",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    },
    {
      title: "Advanced Excel",
      level: "Beginner to Intermediate",
      duration: "4 Weeks",
      price: "₹199",
      desc: "Master logical formatting, macros, pivot charts, and complex formulas for data reporting.",
      category: "Data & AI",
      detailLink: "https://drive.google.com/drive/folders/1JfFv73HnU-LyRBBeuhtJqrXb-U9uGbYz?usp=sharing",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0BrnURrevqruCGj2wnBxU9WfkmtcFzDaSH2Q9j3cXglQICA/viewform?usp=dialog"
    }
  ];

  const categories = ['All', 'Programming', 'Web Dev', 'Data & AI'];

  // Filters calculation
  const filteredCourses = useMemo(() => {
    return courseList.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const getLevelColorClass = (level) => {
    const lvl = level.toLowerCase();
    if (lvl.includes('advanced')) return 'level-advanced';
    if (lvl.includes('intermediate')) return 'level-intermediate';
    return 'level-beginner';
  };

  return (
    <section className="courses-section-page">
      <div className="bg-grid-effect"></div>
      <div className="bg-radial-gradient courses-glow-top"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CATALOG</span>
          <h2>Skill-Boosting Courses</h2>
          <p>Structured, industry-oriented, and self-paced programs designed to prepare you for modern jobs.</p>
        </div>

        {/* Filters Controls Panel */}
        <div className="filters-panel glass-panel fade-in-up">
          {/* Search bar */}
          <div className="search-bar-wrapper">
            <span className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
            <input 
              type="text" 
              placeholder="Search course title or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="search-clear">×</button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Courses Grid */}
        <div className="courses-catalog-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} getLevelColorClass={getLevelColorClass} />
            ))
          ) : (
            <div className="no-results-panel glass-panel fade-in-up">
              <span className="no-results-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              </span>
              <h3>No Courses Found</h3>
              <p>We couldn't find any courses matching "{searchTerm}". Try clearing your filters or using a different query.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} 
                className="btn-primary"
                style={{ marginTop: '16px' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
