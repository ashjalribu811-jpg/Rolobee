import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Home = ({ onYes, onNo, logo }) => {
  return (
    <div className="home-page">
      <div className="premium-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="particle-field">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="floating-shapes">
        <div className="shape shape-triangle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-circle"></div>
        <div className="shape shape-dots"></div>
      </div>

      <div className="premium-container">
        <div className="logo-wrapper">
          <div className="logo-glow"></div>
          <img src={logo} alt="Rolobee" className="premium-logo-main" />
        </div>

        <div className="hero-section">
          <h1 className="hero-title">
            <span className="title-line">
              <span className="title-word">Ask</span>
              <span className="title-word highlight">yourself</span>
            </span>
            <span className="title-line">
              <span className="title-word">eight</span>
              <span className="title-word">questions.</span>
            </span>
          </h1>
        </div>

        <div className="questions-grid">
          {[
            "Is your business doing well right now?",
            "Are your sales growing steadily?",
            "Is your marketing bringing you good results?",
            "Are you getting regular customer inquiries?",
            "Do you feel your brand is reaching the right audience?",
            "Is your current marketing strategy working effectively?",
            "Are you satisfied with your customer flow?",
            "Do you see good potential for scaling your business further?"
          ].map((question, i) => (
            <div key={i} className="question-card" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
              <div className="card-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="card-content">
                <p>{question}</p>
              </div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="cta-button cta-primary" onClick={onYes}>
            <span className="button-text">YES</span>
            <span className="button-icon">
              <FiArrowRight />
            </span>
            <span className="button-glow"></span>
          </button>

          <button className="cta-button cta-secondary" onClick={onNo}>
            <span className="button-text">NO</span>
            <span className="button-glow"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
