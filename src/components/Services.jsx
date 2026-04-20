import React from 'react';
import Navbar from './Navbar';

const Services = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="services-page premium-page">
      <Navbar 
        onBack={onBack} 
        logo={logo} 
        navItems={navItems} 
        setPage={setPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        currentPage="services"
      />

      <div className="services-content premium-content-section">
        <div className="content-body">
          <div className="services-grid">
            <div className="service-cards">
              {[
                'Branding', 'Graphic Design', 'Website Development', 'Software Development',
                'Mobile App Development', 'UI / UX Design', 'Social Media Marketing', 'Digital Marketing',
                'Business Strategy', 'Brand Identity Development', 'Content Creation', 'Marketing Campaigns',
                'Smart Technology Solutions', 'Business Growth Consulting', 'Advertisement Video Production',
                'Product Photography & Videography'
              ].map((service, i) => (
                <div key={i} className="service-card">
                  <h3>{service}</h3>
                  <p>Professional {service.toLowerCase()} services tailored to your business needs.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
