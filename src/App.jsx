import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

// Data
import { projectsData, teamMembers, navItems } from './data/data';

// Components
import BackgroundOrbs from './components/BackgroundOrbs';
import Home from './components/Home';
import SuccessScreen from './components/SuccessScreen';
import Menu from './components/Menu';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';

import Contact from './components/Contact';
import Footer from './components/Footer';

// Assets
import logo from './assets/logorolobee.png';
import founders from "./assets/images/founders.jpg.jpeg";

function App() {
  const [page, setPage] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global Viewport Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          } else {
            entry.target.classList.remove('scroll-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timer = setTimeout(() => {
      const selectors = [
        '.premium-content > *', '.expertise-card-light',
        '.project-card', '.team-member', '.founder-card',
        '.reaction-statement', '.reaction-list li', '.reaction-left', '.reaction-right',
        '.about-conclusion-box', '.contact-info', '.contact-form-container',
        '.life-intro-box', '.life-image-wrapper', '.culture-card', '.gallery-item',
        '.section-title-premium', '.section-title-light', '.section-description-light'
      ];
      
      const elements = document.querySelectorAll(selectors.join(', '));
      elements.forEach((el) => {
        if (!el.classList.contains('scroll-animate')) {
          el.classList.add('scroll-animate');
          observer.observe(el);
        }
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [page]);

  // Custom navigation handler to inject loading animation
  const navigateToPage = (newPage) => {
    const targetPage = newPage === "home" ? "menu" : newPage;
    if (page === targetPage) return;
    
    setIsTransitioning(true);
    setMobileMenuOpen(false);
    
    // Artificial delay for smooth premium transition feel
    setTimeout(() => {
      setPage(targetPage);
      window.scrollTo(0, 0);
      
      // Remove loading overlay after page is ready
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 600); // 600ms loading duration
  };

  // Form states for EmailJS
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const formRef = useRef();

  const [projects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState('all');

  // Form handlers for EmailJS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !consent) {
      alert('Please fill all required fields and agree to the consent');
      return;
    }

    setIsSubmitting(true);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);

    const serviceId = 'service_sbwha2l';
    const templateId = 'template_rpzllko';
    const publicKey = '5Y9O4FkqlLQrR6lPA';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.subject || "New Contact Message"
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setShowSuccessMessage(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setConsent(false);

      setTimeout(() => setShowSuccessMessage(false), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleYesClick = () => navigateToPage("success");
  const handleNoClick = () => navigateToPage("menu");
  const handleBackClick = () => navigateToPage("home");
  const handleBackToMenuClick = () => navigateToPage("menu");

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div className="app">
      {/* Page Transition Loader */}
      <div className={`page-loader ${isTransitioning ? 'active' : ''}`}>
        <div className="loader-dots">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>

      <BackgroundOrbs />

      {page === "home" && (
        <Home onYes={handleYesClick} onNo={handleNoClick} logo={logo} />
      )}

      {page === "success" && (
        <SuccessScreen onBack={handleBackClick} logo={logo} />
      )}

      {page === "menu" && (
        <Menu 
          onBack={handleBackClick} 
          onExplore={() => navigateToPage("services")} 
          setPage={navigateToPage} 
          logo={logo} 
          navItems={navItems}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}


      {page === "services" && (
        <Services 
          onBack={handleBackToMenuClick} 
          logo={logo} 
          navItems={navItems} 
          setPage={navigateToPage} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}

      {page === "portfolio" && (
        <Portfolio 
          onBack={handleBackToMenuClick} 
          logo={logo} 
          navItems={navItems} 
          setPage={navigateToPage} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          projects={filteredProjects}
          filterProjects={filterProjects}
          activeCategory={activeCategory}
        />
      )}

      {page === "team" && (
        <Team 
          onBack={handleBackToMenuClick} 
          logo={logo} 
          navItems={navItems} 
          setPage={navigateToPage} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          founders={founders}
          teamMembers={teamMembers}
        />
      )}



      {page === "contact" && (
        <Contact 
          onBack={handleBackToMenuClick} 
          logo={logo} 
          navItems={navItems} 
          setPage={navigateToPage} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          formRef={formRef}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          consent={consent}
          handleCheckboxChange={handleCheckboxChange}
          isSubmitting={isSubmitting}
          showSuccessMessage={showSuccessMessage}
          showErrorMessage={showErrorMessage}
          setShowSuccessMessage={setShowSuccessMessage}
          setShowErrorMessage={setShowErrorMessage}
        />
      )}

      <Footer logo={logo} navItems={navItems} setPage={navigateToPage} />
    </div>
  );
}

export default App;
