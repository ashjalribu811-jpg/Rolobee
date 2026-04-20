import React from 'react';
import Navbar from './Navbar';

const Portfolio = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen, projects, filterProjects }) => {
  return (
    <div className="portfolio-page premium-page">
      <Navbar 
        onBack={onBack} 
        logo={logo} 
        navItems={navItems} 
        setPage={setPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        currentPage="portfolio"
      />

      <div className="portfolio-content premium-content-section">
        <div className="content-body">
          <div className="portfolio-filters">
            <button className="filter-btn active" onClick={(e) => filterProjects('all', e)}>All Projects</button>
            <button className="filter-btn" onClick={(e) => filterProjects('social media', e)}>Social Media</button>
            <button className="filter-btn" onClick={(e) => filterProjects('branding', e)}>Branding</button>
            <button className="filter-btn" onClick={(e) => filterProjects('video production', e)}>Video Production</button>
          </div>

          <div className="portfolio-grid">
            {projects.map(project => (
              <div key={project.id} className="portfolio-item" data-category={project.category || 'branding'}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="portfolio-info">
                  <h4>{project.name}</h4>
                  <p>{project.client}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-stats">
            <div className="portfolio-stat-card">
              <span className="portfolio-stat-number">250+</span>
              <span className="portfolio-stat-label">Projects</span>
            </div>
            <div className="portfolio-stat-card">
              <span className="portfolio-stat-number">100+</span>
              <span className="portfolio-stat-label">Happy Clients</span>
            </div>
            <div className="portfolio-stat-card">
              <span className="portfolio-stat-number">15+</span>
              <span className="portfolio-stat-label">Brand Partners</span>
            </div>
            <div className="portfolio-stat-card">
              <span className="portfolio-stat-number">25+</span>
              <span className="portfolio-stat-label">Team Members</span>
            </div>
          </div>

          <div className="portfolio-testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              {[
                { name: 'John Smith', role: 'CEO, NeoBank Digital', text: 'Rolobee transformed our business completely.' },
                { name: 'Sarah Johnson', role: 'Founder, Pure Artisan', text: "The team's insights and dedication helped us achieve growth." },
                { name: 'Michael Chen', role: 'CTO, CloudScale AI', text: 'Working with Rolobee was a game-changer.' },
              ].map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
