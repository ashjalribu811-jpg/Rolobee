import React from 'react';
import Navbar from './Navbar';
import { FiArrowRight, FiTrendingUp, FiTarget, FiZap, FiAward } from 'react-icons/fi';

const Menu = ({ onBack, onExplore, setPage, logo, navItems, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <div className="menu-page">
        <div className="rotating-bg">
          <div className="rotating-circle circle-1"></div>
          <div className="rotating-circle circle-2"></div>
          <div className="rotating-circle circle-3"></div>
        </div>

        <Navbar 
          onBack={onBack} 
          logo={logo} 
          navItems={navItems} 
          setPage={setPage} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          currentPage="menu"
        />

        <div className="menu-split-layout">
          <div className="menu-left-content">
            <div className="quote-container">
              <span className="quote-icon">"</span>
              <h1 className="main-quote">
                <span className="quote-line">We are</span>
                <span className="quote-line highlight">Strategy</span>
                <span className="quote-line">Innovation</span>
                <span className="quote-line highlight">Impact</span>
                <span className="quote-line">Consultants.</span>
              </h1>

              <div className="quote-divider"></div>

              <button className="btn btn-primary menu-cta" onClick={onExplore}>
                Explore Our Services <FiArrowRight className="btn-icon" />
              </button>
            </div>
          </div>

          <div className="menu-right-content">
            <div className="rotating-image-container">
              <div className="rotating-image-wrapper">
                <div className="rotating-image-ring ring-outer"></div>
                <div className="rotating-image-ring ring-middle"></div>
                <div className="rotating-image-ring ring-inner"></div>

                <div className="rotating-image-core">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                    alt="Strategy Innovation"
                    className="rotating-img"
                  />
                </div>

                <div className="floating-element element-1"><FiTrendingUp className="float-icon" /></div>
                <div className="floating-element element-2"><FiTarget className="float-icon" /></div>
                <div className="floating-element element-3"><FiZap className="float-icon" /></div>
                <div className="floating-element element-4"><FiAward className="float-icon" /></div>

                <div className="orbiting-dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                  <div className="dot dot-4"></div>
                  <div className="dot dot-5"></div>
                  <div className="dot dot-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-reaction-section premium-page">
        <div className="about-bg-overlay"></div>
        <div className="about-reaction-container">
          <div className="expertise-header-light" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title-light" style={{fontSize: '3.5rem'}}>
              About <span className="text-gradient-light">Us</span>
            </h2>
            <p className="section-description-light" style={{textAlign: 'center', margin: '1rem auto 0 auto', fontSize: '1.4rem', color: '#666', maxWidth: '600px'}}>
              We exist to make brands impossible to ignore.
            </p>
          </div>

          <div className="about-reaction-content">
            <div className="reaction-left">
              <h3 className="reaction-statement">
                Rolobee isn’t an agency.<br/>
                <span className="text-red">It’s a reaction.</span>
              </h3>
              <ul className="reaction-list">
                <li>A reaction to boring brands.</li>
                <li>A reaction to ads people scroll past.</li>
                <li>A reaction to “good enough” marketing.</li>
              </ul>
            </div>
            
            <div className="reaction-right">
              <p className="reaction-strong-text">
                We think like creators, move like hackers, and execute like a machine built for growth. Every idea we touch is designed to do one thing: stop thumbs, spark emotion, and drive action.
              </p>
              
              <div className="reaction-divider"></div>
              
              <p className="reaction-bold-points">
                No templates. No recycled strategies. No fake hype.
              </p>
              
              <p className="reaction-normal-text">
                Just sharp thinking, fearless creativity, and campaigns that actually work in the real world — not just in presentations.
              </p>
            </div>
          </div>

          <div className="about-conclusion-box">
             <p className="fade-text">If your brand wants to blend in, we’re not for you.</p>
             <p className="highlight-outro">If your brand wants to dominate, <span className="text-red">welcome to Rolobee.</span></p>
          </div>
        </div>
      </div>

      <div className="expertise-section-light">
        <div className="expertise-bg-light">
          <div className="gradient-orb-light orb-1"></div>
          <div className="gradient-orb-light orb-2"></div>
          <div className="grid-overlay-light"></div>
        </div>

        <div className="expertise-container">
          <div className="expertise-header-light">
            <h2 className="section-title-light">
              Our Core <span className="text-gradient-light">Expertise</span>
            </h2>
          </div>

          <div className="expertise-grid-light">
            {[
              { icon: '📈', title: 'Proven Client Results', desc: 'Delivering measurable outcomes with consistent performance.', stat: '👉 95% Client Retention' },
              { icon: '📊', title: 'Data-Driven Marketing', desc: 'Strategies backed by analytics and real insights.', stat: '👉 ROI-Focused Approach' },
              { icon: '⚡', title: 'Fast Turnaround Time', desc: 'Quick execution without compromising quality.', stat: '24/7 Hour Working' },
              { icon: '💻', title: 'Multi-Platform Expertise', desc: 'From social media to web, we cover all digital touchpoints.', stat: '👉 10+ Platforms Managed' },
              { icon: '📋', title: 'Transparent Reporting', desc: 'Clear insights and performance tracking for every project.', stat: '👉 Clear Performance Reports' },
              { icon: '✨', title: 'Creative Campaign Execution', desc: 'High-impact creatives that capture attention and convert.', stat: '👉 50+ Campaigns Launched' },
            ].map((item, i) => (
              <div key={i} className="expertise-card-light">
                <div className="card-icon-wrapper-light">
                  <div className="card-icon-glow-light"></div>
                  <span className="card-icon-light">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-stats-light">
                  <span className="stat-light">{item.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="conclusion-section-light">
        <div className="conclusion-bg-light">
          <div className="gradient-orb-light orb-1"></div>
          <div className="gradient-orb-light orb-2"></div>
          <div className="grid-overlay-light"></div>
        </div>

        <div className="conclusion-container">
          <div className="conclusion-content-centered">
            <div className="value-proposition-centered">
              <h3>Why Partner With Us?</h3>
              <ul className="value-list-centered">
                {[
                  { title: 'Proven Track Record', desc: '250+ successful projects delivered globally' },
                  { title: 'Expert Team', desc: 'Industry veterans with decades of experience' },
                  { title: 'Data-Driven Approach', desc: 'Decisions backed by analytics and insights' },
                  { title: 'Long-Term Partnership', desc: 'We grow together, celebrating your success' },
                ].map((item, i) => (
                  <li key={i} className="value-item-centered">
                    <span className="value-check-centered">✓</span>
                    <div className="value-text-centered">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mini-testimonial-centered">
              <div className="testimonial-quote-mark-centered">"</div>
              <p className="testimonial-text-centered">
                Rolobee didn't just consult – they became true partners in our growth journey.
              </p>
              <div className="testimonial-author-centered">
                <div className="author-details-centered">
                  <strong>Habeeb Rahman</strong>
                  <span>Founder, Rolobee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-badges-centered">
            <div className="trust-badge-centered">
              <span>🏆</span>
              Best Consulting 2024
            </div>
            <div className="trust-badge-centered">
              <span>⭐</span>
              4.9/5 Client Rating
            </div>
            <div className="trust-badge-centered">
              <span>🔒</span>
              100% Confidential
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
