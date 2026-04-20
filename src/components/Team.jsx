import React from 'react';
import Navbar from './Navbar';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Team = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen, founders, teamMembers }) => {
  return (
    <div className="team-page premium-page">
      <Navbar 
        onBack={onBack} 
        logo={logo} 
        navItems={navItems} 
        setPage={setPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        currentPage="team"
      />

      <div className="team-content premium-content-section">
        <div className="content-body">
          <div className="founder-section">
            <div className="founder-card">
              <div className="founder-image-wrapper">
                <div className="founder-image">
                  <img src={founders} alt="Founders" />
                  <div className="founder-social">
                    <a href="https://www.linkedin.com/in/wafa-sithara-7b917128b" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/hxbeeb._" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className="founder-info">
                <div className="founder-badge">FOUNDERS & CREATIVE HEAD</div>
                <h2>Habeeb & Wafa Sithara</h2>
                <p className="founder-quote">"Building strategies that create lasting impact"</p>
                <p className="founder-bio">Rolobee started with two founders, big ideas, and a lot of 'this will work, trust me' moments. Today, it's where creativity and strategy come together to build brands that actually make noise.</p>
              </div>
            </div>
          </div>

          <div className="team-members-header">
            <h2>Leadership Team</h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-member">
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                  <div className="member-social">
                    <a href="#" className="social-link"><FaLinkedinIn /></a>
                    <a href="#" className="social-link"><FaInstagram /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="team-stats">
            <div className="team-stat-card">
              <span className="team-stat-number">5+</span>
              <span className="team-stat-label">Years of Experience</span>
            </div>
            <div className="team-stat-card">
              <span className="team-stat-number">15+</span>
              <span className="team-stat-label">Members</span>
            </div>
            <div className="team-stat-card">
              <span className="team-stat-number">100+</span>
              <span className="team-stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
