import React from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen, projects, filterProjects, activeCategory }) => {
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
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => filterProjects('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${activeCategory === 'social media' ? 'active' : ''}`}
              onClick={() => filterProjects('social media')}
            >
              Social Media
            </button>
            <button
              className={`filter-btn ${activeCategory === 'brochures' ? 'active' : ''}`}
              onClick={() => filterProjects('brochures')}
            >
              Brochures
            </button>
            <button
              className={`filter-btn ${activeCategory === 'branding' ? 'active' : ''}`}
              onClick={() => filterProjects('branding')}
            >
              Branding
            </button>
          </div>

          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {projects.map(project => (
                <motion.div
                  layout
                  key={project.id}
                  className="portfolio-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{project.name}</h4>
                    <p>{project.client}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>



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
