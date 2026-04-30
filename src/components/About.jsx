import React from 'react';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';
import carVideo from '../assets/videos/car theme 1313.webm';

const About = ({ onBack, setPage, logo, navItems, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="about-page">
      <div className="menu-page">
        <video
          className="menu-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={carVideo} type="video/webm" />
        </video>
        
        <Navbar
          onBack={onBack}
          logo={logo}
          navItems={navItems}
          setPage={setPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          currentPage="about"
        />

        <div className="menu-split-layout">
          <div className="menu-left-content">
            <div className="expertise-header-light" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title-light" style={{ fontSize: '3.5rem' }}>
                About <span className="text-gradient-light">Us</span>
              </h2>
              <p className="section-description-light" style={{ textAlign: 'center', margin: '1rem auto 0 auto', fontSize: '1.4rem', color: '#666', maxWidth: '600px' }}>
                We exist to make brands impossible to ignore.
              </p>
            </div>

            <div className="about-reaction-content">
              <div className="reaction-left">
                <h3 className="reaction-statement">
                  Rolobee isn’t an agency.<br />
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
      </div>
    </div>
  );
};

export default About;
