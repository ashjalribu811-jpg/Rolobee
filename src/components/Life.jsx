import React from 'react';
import Navbar from './Navbar';

const Life = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="life-page premium-page">
      <Navbar 
        onBack={onBack} 
        logo={logo} 
        navItems={navItems} 
        setPage={setPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        currentPage="life"
      />

      <div className="life-content premium-content-section">
        <div className="content-body">
          <div className="life-gallery">
            <div className="gallery-grid">
              {[
                { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', title: 'Team Collaboration', desc: 'Where ideas come to life together', large: true },
                { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4', title: 'Creative Space' },
                { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', title: 'Brainstorming Sessions' },
                { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978', title: 'Team Outings' },
                { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0', title: 'Work Culture' },
                { img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0', title: 'Celebrations' },
              ].map((item, i) => (
                <div key={i} className={`gallery-item ${item.large ? 'large' : ''}`}>
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    {item.desc && <p>{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="life-values">
            <h2>Our Culture</h2>
            <div className="values-grid">
              {[
                { icon: '💡', title: 'Innovation First', desc: 'We encourage bold thinking and creative problem-solving every day.' },
                { icon: '🤝', title: 'Collaboration', desc: 'Great things happen when we work together and support each other.' },
                { icon: '🌱', title: 'Growth Mindset', desc: "We're always learning, evolving, and pushing boundaries." },
                { icon: '🎉', title: 'Celebrate Wins', desc: 'Every milestone, big or small, deserves recognition.' },
              ].map((item, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Life;
