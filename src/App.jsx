import  { useState, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiArrowRight, FiMenu } from 'react-icons/fi';
import logo from './assets/logorolobee.png';
import './App.css';
import founders from "./assets/images/founders.jpg.jpeg"
import ceo from "./assets/images/CEO.jpg.jpeg"
import dm from "./assets/images/ajmal.jpeg"
import th from "./assets/images/thaju.jpeg"
import sh from "./assets/images/shabi.jpeg"
import ash from "./assets/images/ribu.jpeg"
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import infinite from "./assets/images/infinite.jpg";

function App() {
  const [page, setPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleYesClick = () => {
    setPage("success");
  };

  const handleNoClick = () => {
    setPage("menu");
  };

  const handleBackClick = () => {
    setPage("home");
  };

  const handleBackToMenuClick = () => {
    setPage("menu");
  };

  const navItems = [
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "life", label: "Life" },
    { id: "contact", label: "Contact" }
  ];

  // Filter projects function
const filterProjects = (category, e) => {
  // Update active button styling
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  
  // Get all portfolio items
  const items = document.querySelectorAll('.portfolio-item');
  
  // Filter based on category
  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      const itemCategory = item.getAttribute('data-category').toLowerCase();
      if (itemCategory === category.toLowerCase()) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
};

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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !consent) {
      alert('Please fill all required fields and agree to the consent');
      return;
    }

    setIsSubmitting(true);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);

    // EmailJS credentials - Replace with your actual values
    const serviceId = 'service_sbwha2l'; // Get from EmailJS
    const templateId = 'template_rpzllko'; // Get from EmailJS
    const publicKey = '5Y9O4FkqlLQrR6lPA'; // Get from EmailJS

    // Template parameters
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
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setConsent(false);
      
      // Auto hide success message after 5 seconds
      setTimeout(() => setShowSuccessMessage(false), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setShowErrorMessage(true);
      
      // Auto hide error message after 5 seconds
      setTimeout(() => setShowErrorMessage(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="app">
      <div className="bg-layer"></div>
      <div className="bg-gradient"></div>
{page === "home" && (
  <div className="home-page">
    {/* Premium Background with Dynamic Gradient */}
    <div className="premium-bg">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="grid-overlay"></div>
    </div>

    {/* Animated Particles */}
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

    {/* Floating Geometric Shapes */}
    <div className="floating-shapes">
      <div className="shape shape-triangle"></div>
      <div className="shape shape-square"></div>
      <div className="shape shape-circle"></div>
      <div className="shape shape-dots"></div>
    </div>

    {/* Main Content Container */}
    <div className="premium-container">
      
      {/* Logo with Premium Animation */}
      <div className="logo-wrapper">
        <div className="logo-glow"></div>
        <img 
          src={logo} 
          alt="Rolobee" 
          className="premium-logo-main"
        />
      </div>

      {/* Hero Section */}
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

        <div className="hero-description">
  
        </div>
      </div>

      {/* Questions Cards */}
      <div className="questions-grid">
        <div className="question-card" style={{animationDelay: '0.1s'}}>
          <div className="card-number">01</div>
          <div className="card-content">
          
            <p>Is your business profitable enough?</p>
          </div>
          <div className="card-shine"></div>
        </div>

        <div className="question-card" style={{animationDelay: '0.2s'}}>
          <div className="card-number">02</div>
          <div className="card-content">
        
            <p>Is your brand relevant enough?</p>
          </div>
          <div className="card-shine"></div>
        </div>

        <div className="question-card" style={{animationDelay: '0.3s'}}>
          <div className="card-number">03</div>
          <div className="card-content">
            
            <p>Are you growing in the right direction?</p>
          </div>
          <div className="card-shine"></div>
        </div>

        <div className="question-card" style={{animationDelay: '0.4s'}}>
          <div className="card-number">04</div>
          <div className="card-content">
      
            <p>Are you building something sustainable?</p>
          </div>
          <div className="card-shine"></div>
        </div>

        <div className="question-card" style={{animationDelay: '0.5s'}}>
          <div className="card-number">05</div>
          <div className="card-content">
            
            <p>Is your brand strong enough to stand out?</p>
          </div>
          <div className="card-shine"></div>
        </div>
        <div className="question-card" style={{animationDelay: '0.5s'}}>
          <div className="card-number">06</div>
          <div className="card-content">
            
            <p>Are you ready to scale beyond limits?</p>
          </div>
          <div className="card-shine"></div>
        </div>
        <div className="question-card" style={{animationDelay: '0.5s'}}>
          <div className="card-number">07</div>
          <div className="card-content">
            
            <p>Is your organization ready for digital acceleration?</p>
          </div>
          <div className="card-shine"></div>
        </div>
        <div className="question-card" style={{animationDelay: '0.5s'}}>
          <div className="card-number">08</div>
          <div className="card-content">
            
            <p>Is your brand creating real market impact?</p>
          </div>
          <div className="card-shine"></div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="cta-section">
        <button 
          className="cta-button cta-primary" 
          onClick={handleYesClick}
        >
          <span className="button-text">YES, I'M READY</span>
          <span className="button-icon">
            <FiArrowRight />
          </span>
          <span className="button-glow"></span>
        </button>
        
        <button 
          className="cta-button cta-secondary" 
          onClick={handleNoClick}
        >
          <span className="button-text">NOT YET</span>
          <span className="button-glow"></span>
        </button>
      </div>

      {/* Stats Strip */}
  

    </div>
  </div>
)}
 {page === "success" && (
  <motion.div
    className="success-screen premium-success"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="success-header">
      <button className="back-btn success-back-btn" onClick={handleBackClick}>
        <IoIosArrowBack size={23} />
      </button>

      <motion.img
        src={logo}
        alt="Rolobee"
        className="success-logo"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </div>

    <div className="success-content">
      <motion.div
        className="success-badge"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        You're <span className="text-gradient">Winning!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Now start building something unstoppable...
      </motion.p>
    </div>
  </motion.div>
)}

{page === "menu" && (
  <>
    <div className="menu-page">
      {/* Background rotating elements */}
      <div className="rotating-bg">
        <div className="rotating-circle circle-1"></div>
        <div className="rotating-circle circle-2"></div>
        <div className="rotating-circle circle-3"></div>
      </div>

      <nav className="main-navbar glass-nav">
        <div className="nav-left">
          <button className="back-btn nav-back-btn" onClick={handleBackClick}>
            <IoIosArrowBack size={23} />
          </button>
          <img src={logo} alt="Rolobee" className="nav-logo" />
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FiMenu size={24} />
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id} onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-split-layout">
        {/* Left side - Quote Content */}
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

            <button className="btn btn-primary menu-cta" onClick={() => setPage("services")}>
              Explore Our Services <FiArrowRight className="btn-icon" />
            </button>
          </div>
        </div>

        {/* Right side - Infinite Rotating Image */}
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
              
              {/* Floating elements around the rotating image */}
              <div className="floating-element element-1">⚡</div>
              <div className="floating-element element-2">🚀</div>
              <div className="floating-element element-3">💡</div>
              <div className="floating-element element-4">✨</div>
              
              {/* Orbiting dots */}
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

    {/* Quote Section */}
    <div className="quote-section premium-quote">
      <div className="quote-left">
        <span className="quote-mark">"</span>
        <h2>
          We convert ideas into profitable outcomes
        </h2>
      </div>

      <div className="quote-right">
        <p>
          At Rolobee, we unlock business potential through insight-driven
          strategy and agile execution. By combining innovation with
          data-backed decisions, we help organizations adapt to evolving
          market demands and stay ahead of the competition. With bold
          thinking and strategic clarity, we transform challenges into
          opportunities — delivering measurable impact, long-term value,
          and sustainable growth in a rapidly changing digital world.
        </p>
        <div className="quote-stats">
          <div className="stat-item">
            <span className="stat-number">250+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
    </div>

    {/* ===== EXPERTISE SECTION ===== */}
    <div className="expertise-section-light">
      {/* Background Elements */}
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
          {/* Card 1 - Business Strategy */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">📊</span>
            </div>
            <h3>Business Strategy</h3>
            <p>Data-driven strategies that drive growth and maximize ROI for forward-thinking companies.</p>
            <div className="card-stats-light">
              <span className="stat-light">95% Success Rate</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          {/* Card 2 - Innovation Consulting */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">💡</span>
            </div>
            <h3>Innovation Consulting</h3>
            <p>Cutting-edge solutions and creative approaches for modern business challenges.</p>
            <div className="card-stats-light">
              <span className="stat-light">50+ Innovations</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          {/* Card 3 - Growth Acceleration */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">🚀</span>
            </div>
            <h3>Growth Acceleration</h3>
            <p>Scalable frameworks and proven methodologies for sustainable business expansion.</p>
            <div className="card-stats-light">
              <span className="stat-light">200% Avg. Growth</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          {/* Card 4 - Market Positioning */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">🎯</span>
            </div>
            <h3>Market Positioning</h3>
            <p>Strategic positioning and brand differentiation for competitive advantage.</p>
            <div className="card-stats-light">
              <span className="stat-light">Market Leader</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          {/* Card 5 - Digital Transformation */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">💻</span>
            </div>
            <h3>Digital Transformation</h3>
            <p>End-to-end digital solutions that modernize operations and enhance customer experience.</p>
            <div className="card-stats-light">
              <span className="stat-light">250+ Projects</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          {/* Card 6 - Brand Strategy */}
          <div className="expertise-card-light">
            <div className="card-icon-wrapper-light">
              <div className="card-icon-glow-light"></div>
              <span className="card-icon-light">✨</span>
            </div>
            <h3>Brand Strategy</h3>
            <p>Compelling brand identities and messaging that resonate with target audiences.</p>
            <div className="card-stats-light">
              <span className="stat-light">85% Recognition</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        </div>

        {/* Floating Stats */}
   

     
      </div>
    </div>

<div className="conclusion-section-light">
  {/* Background Elements */}
  <div className="conclusion-bg-light">
    <div className="gradient-orb-light orb-1"></div>
    <div className="gradient-orb-light orb-2"></div>
    <div className="grid-overlay-light"></div>
  </div>

  <div className="conclusion-container">
    {/* Header */}
    <div className="conclusion-header-light">
  
    </div>

    {/* Main Content - Centered */}
    <div className="conclusion-content-centered">
      {/* Value Proposition - Centered */}
      <div className="value-proposition-centered">
        <h3>Why Partner With Us?</h3>
        <ul className="value-list-centered">
          <li className="value-item-centered">
            <span className="value-check-centered">✓</span>
            <div className="value-text-centered">
              <strong>Proven Track Record</strong>
              <p>250+ successful projects delivered globally</p>
            </div>
          </li>
          <li className="value-item-centered">
            <span className="value-check-centered">✓</span>
            <div className="value-text-centered">
              <strong>Expert Team</strong>
              <p>Industry veterans with decades of combined experience</p>
            </div>
          </li>
          <li className="value-item-centered">
            <span className="value-check-centered">✓</span>
            <div className="value-text-centered">
              <strong>Data-Driven Approach</strong>
              <p>Decisions backed by analytics and market insights</p>
            </div>
          </li>
          <li className="value-item-centered">
            <span className="value-check-centered">✓</span>
            <div className="value-text-centered">
              <strong>Long-Term Partnership</strong>
              <p>We grow together, celebrating your success as our own</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Testimonial - Centered */}
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

    {/* Trust Badges - Centered */}
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
)}
{/* Testimonials Section - Premium */}

      {["services", "portfolio", "team", "life", "contact"].map((item) => (
        page === item && (
          <div className={`${item}-page premium-page`} key={item}>
            <nav className="main-navbar glass-nav">
              <div className="nav-left">
                <button className="back-btn nav-back-btn" onClick={handleBackToMenuClick}>
                  <IoIosArrowBack size={23} />
                </button>
                <img src={logo} alt="Rolobee" className="nav-logo" />
              </div>

              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <FiMenu size={24} />
              </button>

              <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                {navItems.map(navItem => (
                  <li 
                    key={navItem.id} 
                    className={navItem.id === item ? 'active' : ''}
                    onClick={() => { setPage(navItem.id); setMobileMenuOpen(false); }}
                  >
                    {navItem.label}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={`${item}-content premium-content-section`}>
              <div className="content-body">
                {/* Services Page */}
                {item === "services" && (
                  <div className="services-grid">
                    <div className="service-cards">
                      <div className="service-card">
                        <h3>Branding</h3>
                        <p>Building strong, memorable brands with clear positioning and impact.</p>
                      </div>
                      <div className="service-card">
                        <h3>Graphic Design</h3>
                        <p>Creating visually compelling designs that elevate brand perception</p>
                      </div>
                      <div className="service-card">
                        <h3>Website Development</h3>
                        <p>Developing responsive, high-performance websites that convert.</p>
                      </div>
                      <div className="service-card">
                        <h3>Software Development</h3>
                        <p>Delivering scalable software solutions tailored to business needs.</p>
                      </div>
                      <div className="service-card">
                        <h3>Mobile App Development</h3>
                        <p>Building intuitive mobile apps for seamless user experiences.</p>
                      </div>
                      <div className="service-card">
                        <h3>UI / UX Design</h3>
                        <p>Designing user-centered interfaces that combine clarity and function.</p>
                      </div>
                      <div className="service-card">
                        <h3>Social Media Marketing</h3>
                        <p>Growing brand presence through strategic social engagement.</p>
                      </div>
                      <div className="service-card">
                        <h3>Digital Marketing</h3>
                        <p>Driving measurable results with data-driven digital strategies.</p>
                      </div>
                      <div className="service-card">
                        <h3>Business Strategy</h3>
                        <p>Providing strategic direction for sustainable growth and advantage.</p>
                      </div>
                      <div className="service-card">
                        <h3>Brand Identity Development</h3>
                        <p>Crafting cohesive visual identities that build recognition and trust.</p>
                      </div>
                      <div className="service-card">
                        <h3>Content Creation</h3>
                        <p>Producing impactful content that connects and converts.</p>
                      </div>
                      <div className="service-card">
                        <h3>Marketing Campaigns</h3>
                        <p>Executing targeted campaigns that deliver real business results.</p>
                      </div>
                      <div className="service-card">
                        <h3>Smart Technology Solutions</h3>
                        <p>Integrating smart systems to improve efficiency and innovation.</p>
                      </div>
                      <div className="service-card">
                        <h3>Business Growth Consulting</h3>
                        <p>Accelerating growth through structured and scalable strategies.</p>
                      </div>
                      <div className="service-card">
                        <h3>Advertisement Video Production</h3>
                        <p>Creating powerful video content that captures attention and drives action.</p>
                      </div>
                      <div className="service-card">
                        <h3>Product Photography & Videography</h3>
                        <p>Producing high-quality visuals that enhance product appeal.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Portfolio Page */}
    
   {item === "portfolio" && (
  <>
    <div className="portfolio-filters">
      <button className="filter-btn active" onClick={(e) => filterProjects('all', e)}>All Projects</button>
      <button className="filter-btn" onClick={(e) => filterProjects('social media', e)}>Social Media</button>
      <button className="filter-btn" onClick={(e) => filterProjects('branding', e)}>Branding</button>
      <button className="filter-btn" onClick={(e) => filterProjects('video production', e)}>Video Production</button>
    </div>

    <div className="portfolio-grid">
      {/* Social Media Projects */}
      <div className="portfolio-item" data-category="social media">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Social Media Campaign" />
        </div>
        <div className="portfolio-info">
          <h4>NeoBank Digital</h4>
          <p>Complete social media strategy for a leading fintech startup</p>
        </div>
      </div>

      {/* Branding Projects */}
      <div className="portfolio-item" data-category="branding">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80" alt="Luxury Brand Identity" />
        </div>
        <div className="portfolio-info">
          <h4>Maison Élégance</h4>
          <p>Complete brand identity overhaul for a premium fashion house</p>
        </div>
      </div>

      {/* Branding Projects */}
      <div className="portfolio-item" data-category="branding">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Tech Brand Strategy" />
        </div>
        <div className="portfolio-info">
          <h4>CloudScale AI</h4>
          <p>Brand strategy and market positioning for B2B SaaS</p>
        </div>
      </div>

      {/* Video Production Projects */}
      <div className="portfolio-item" data-category="video production">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Healthcare Video Production" />
        </div>
        <div className="portfolio-info">
          <h4>MediCare Plus</h4>
          <p>Promotional video production for healthcare network</p>
        </div>
      </div>

      {/* Social Media Projects */}
      <div className="portfolio-item" data-category="social media">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Manufacturing Social Media" />
        </div>
        <div className="portfolio-info">
          <h4>Industrial Dynamics</h4>
          <p>Social media strategy and content creation</p>
        </div>
      </div>

      {/* Social Media Projects */}
      <div className="portfolio-item" data-category="social media">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="E-commerce Social Media" />
        </div>
        <div className="portfolio-info">
          <h4>ShopMax Retail</h4>
          <p>Social media optimization and engagement strategy</p>
        </div>
      </div>

      {/* Branding Projects */}
      <div className="portfolio-item" data-category="branding">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" alt="Food Brand Identity" />
        </div>
        <div className="portfolio-info">
          <h4>Pure Artisan</h4>
          <p>Brand launch and visual identity development</p>
        </div>
      </div>

      {/* Branding Projects */}
      <div className="portfolio-item" data-category="branding">
        <div className="portfolio-image">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Professional Services Branding" />
        </div>
        <div className="portfolio-info">
          <h4>ConsultPro Global</h4>
          <p>Complete brand identity and market expansion</p>
        </div>
      </div>
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
        <div className="testimonial-card">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">Rolobee transformed our business completely. Their strategic approach and execution capabilities are unmatched.</p>
          <div className="testimonial-author">
            <strong>John Smith</strong>
            <span>CEO, NeoBank Digital</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">The team's insights and dedication helped us achieve growth we never thought possible.</p>
          <div className="testimonial-author">
            <strong>Sarah Johnson</strong>
            <span>Founder, Pure Artisan</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">Working with Rolobee was a game-changer. Their expertise in digital transformation is exceptional.</p>
          <div className="testimonial-author">
            <strong>Michael Chen</strong>
            <span>CTO, CloudScale AI</span>
          </div>
        </div>
      </div>
    </div>
  </>
)}

                
                {/* Team Page */}
              {item === "team" && (
  <>
    <div className="founder-section">
      <div className="founder-card">
        <div className="founder-image-wrapper">
          <div className="founder-image">
            <img src={founders} alt="Founders" />
           <div className="founder-social">
  <a 
    href="https://www.linkedin.com/in/wafa-sithara-7b917128b?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/hxbeeb._?igsh=MTF6ajA4djh6anh6ag==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
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
      <div className="team-member">
        <div className="member-image">
          <img src={ceo} alt="Raniya" />
          <div className="member-social">
  <a 
    href="https://www.linkedin.com/in/raniya-ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/raniya_ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </div>
        <div className="member-info">
          <h3>Raniya CT</h3>
          <span className="member-role">CEO</span>
          <p>Leads the company with passion, creativity, and a strong vision for helping businesses grow</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-image">
          <img src={dm} alt="Ajmal" />
         <div className="member-social">
  <a 
    href="https://www.linkedin.com/in/raniya-ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/raniya_ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </div>
        <div className="member-info">
          <h3>Ajmal Anfas</h3>
          <span className="member-role">Digital Marketing Strategist</span>
          <p>Delivering integrated digital solutions that enhance brand visibility, engagement, and revenue performance.</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-image">
          <img src={th} alt="Thaju" />
          <div className="member-social">
  <a 
    href="https://www.linkedin.com/in/raniya-ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/raniya_ct" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </div>
        <div className="member-info">
          <h3>Thajudheen</h3>
          <span className="member-role">Developer Head</span>
          <p>He doesn't just write code — he builds digital experiences that help ideas come to life</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-image">
          <img src={sh} alt="Shabeeb" />
          <div className="member-social">
  <a 
    href="https://www.linkedin.com/in/shabeebu-rahman-63a611335?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/shab.iiib?igsh=MXRycXAza3VkcXFrNw==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </div>
        <div className="member-info">
          <h3>Shabeeb Rahman</h3>
          <span className="member-role">Creative Visualiser</span>
          <p>Turns ideas into visuals that tell stories, capture attention, and bring brands to life.</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-image">
          <img src={ash} alt="Ashjal" />
          <div className="member-social">
  <a 
    href="https://www.linkedin.com/in/ashjal-ribu-mern-stack-developer?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="https://www.instagram.com/_.ribu__?igsh=MWh0NXpoZDg3aTBuOQ==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
        </div>
        <div className="member-info">
          <h3>Ashjal UK</h3>
          <span className="member-role">Developer</span>
          <p>Turns ideas into scalable digital solutions that power performance and drive impact.</p>
        </div>
      </div>
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
  </>
)}
                {/* Life at Rolobee Page */}
                {item === "life" && (
                  <>
                    <div className="life-gallery">
                      <div className="gallery-grid">
                        <div className="gallery-item large">
                          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Team collaboration" />
                          <div className="gallery-overlay">
                            <h3>Team Collaboration</h3>
                            <p>Where ideas come to life together</p>
                          </div>
                        </div>
                        <div className="gallery-item">
                          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Office space" />
                          <div className="gallery-overlay">
                            <h3>Creative Space</h3>
                          </div>
                        </div>
                        <div className="gallery-item">
                          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Team meeting" />
                          <div className="gallery-overlay">
                            <h3>Brainstorming Sessions</h3>
                          </div>
                        </div>
                        <div className="gallery-item">
                          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Team outing" />
                          <div className="gallery-overlay">
                            <h3>Team Outings</h3>
                          </div>
                        </div>
                        <div className="gallery-item">
                          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Work culture" />
                          <div className="gallery-overlay">
                            <h3>Work Culture</h3>
                          </div>
                        </div>
                        <div className="gallery-item">
                          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" alt="Celebration" />
                          <div className="gallery-overlay">
                            <h3>Celebrations</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="life-values">
                      <h2>Our Culture</h2>
                      <div className="values-grid">
                        <div className="value-card">
                          <div className="value-icon">💡</div>
                          <h3>Innovation First</h3>
                          <p>We encourage bold thinking and creative problem-solving every day.</p>
                        </div>
                        <div className="value-card">
                          <div className="value-icon">🤝</div>
                          <h3>Collaboration</h3>
                          <p>Great things happen when we work together and support each other.</p>
                        </div>
                        <div className="value-card">
                          <div className="value-icon">🌱</div>
                          <h3>Growth Mindset</h3>
                          <p>We're always learning, evolving, and pushing boundaries.</p>
                        </div>
                        <div className="value-card">
                          <div className="value-icon">🎉</div>
                          <h3>Celebrate Wins</h3>
                          <p>Every milestone, big or small, deserves recognition.</p>
                        </div>
                      </div>
                    </div>

                    <div className="life-perks">
                      <h2>Perks & Benefits</h2>
                      <div className="perks-grid">
                        <div className="perk-item">
                          <span className="perk-icon">🏠</span>
                          <h4>Flexible Work</h4>
                          <p>Remote and hybrid options</p>
                        </div>
                        <div className="perk-item">
                          <span className="perk-icon">📚</span>
                          <h4>Learning Budget</h4>
                          <p>Courses, books, conferences</p>
                        </div>
                        <div className="perk-item">
                          <span className="perk-icon">🏥</span>
                          <h4>Health Insurance</h4>
                          <p>Comprehensive coverage</p>
                        </div>
                        <div className="perk-item">
                          <span className="perk-icon">🎂</span>
                          <h4>Birthday Off</h4>
                          <p>Celebrate your special day</p>
                        </div>
                        <div className="perk-item">
                          <span className="perk-icon">🌴</span>
                          <h4>Paid Time Off</h4>
                          <p>Generous vacation policy</p>
                        </div>
                        <div className="perk-item">
                          <span className="perk-icon">🤗</span>
                          <h4>Team Events</h4>
                          <p>Regular fun activities</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Contact Page */}
                {item === "contact" && (
                  <>
                    {/* Success Message */}
                    {showSuccessMessage && (
                      <div className="message-popup success">
                        <div className="message-icon">✓</div>
                        <div className="message-content">
                          <h4>Message Sent Successfully!</h4>
                          <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        </div>
                        <button className="message-close" onClick={() => setShowSuccessMessage(false)}>×</button>
                      </div>
                    )}

                    {/* Error Message */}
                    {showErrorMessage && (
                      <div className="message-popup error">
                        <div className="message-icon">⚠</div>
                        <div className="message-content">
                          <h4>Failed to Send Message</h4>
                          <p>Please try again or contact us directly via phone.</p>
                        </div>
                        <button className="message-close" onClick={() => setShowErrorMessage(false)}>×</button>
                      </div>
                    )}

                    <div className="contact-grid-premium">
            
                      <div className="contact-info-premium">
                        <div className="info-header">
                          <span className="info-subtitle">GET IN TOUCH</span>
                          <h2>Let's discuss your vision</h2>
                          <p>Reach out to us and let's start a conversation about how we can help transform your business.</p>
                        </div>

                        <div className="info-details">
                          <div className="info-item">
                            <div className="info-icon">
                              <span>📍</span>
                            </div>
                            <div className="info-content">
                              <h4>Visit Us</h4>
                              <p>India</p>
                              <p className="info-light">Malappuram</p>
                            </div>
                          </div>

                          <div className="info-item">
                            <div className="info-icon">
                              <span>📞</span>
                            </div>
                            <div className="info-content">
                              <h4>Call Us</h4>
                              <p>+91 7012510512</p>
                              <p className="info-light">Mon-Fri, 9am to 6pm</p>
                            </div>
                          </div>

                          <div className="info-item">
                            <div className="info-icon">
                              <span>✉️</span>
                            </div>
                            <div className="info-content">
                              <h4>Email Us</h4>
                              <p>hello@rolobee.com</p>
                              <p className="info-light">We reply within 24 hours</p>
                            </div>
                          </div>
                        </div>

                        <div className="info-social">
                          <h4>Connect With Us</h4>
                          <div className="social-buttons">
                            <a 
                              href="https://wa.me/917012510512" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="social-btn whatsapp"
                            >
                              <IoLogoWhatsapp className="social-icon" />
                              <span className="social-text">WhatsApp</span>
                            </a>
                            <a 
                              href="https://www.instagram.com/rolobee.in?igsh=N3Jhb21zamNrYmFw" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="social-btn instagram"
                            >
                              <IoLogoInstagram className="social-icon" />
                              <span className="social-text">Instagram</span>
                            </a>
                            <a 
                              href="https://www.linkedin.com/company/rolobee/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="social-btn linkedin"
                            >
                              <IoLogoLinkedin className="social-icon" />
                              <span className="social-text">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Contact Form Section */}
                      <div className="contact-form-premium">
                        <div className="form-header">
                          <h3>Send us a message</h3>
                          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Your Name *</label>
                              <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                className="form-input"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label>Email Address *</label>
                              <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@company.com"
                                className="form-input"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91 12345 67890"
                                className="form-input"
                              />
                            </div>
                            <div className="form-group">
                              <label>Company</label>
                              <input 
                                type="text" 
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Company"
                                className="form-input"
                              />
                            </div>
                          </div>

                          <div className="form-group full-width">
                            <label>Subject</label>
                            <input 
                              type="text" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="What would you like to discuss?"
                              className="form-input"
                            />
                          </div>

                          <div className="form-group full-width">
                            <label>Message *</label>
                            <textarea 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell us about your project, goals, or questions..."
                              rows="4"
                              className="form-textarea"
                              required
                            ></textarea>
                          </div>

                          <div className="form-checkbox">
                            <input 
                              type="checkbox" 
                              id="consent" 
                              checked={consent}
                              onChange={handleCheckboxChange}
                              required
                            />
                            <label htmlFor="consent">
                              I agree to the processing of my personal data for the purpose of responding to my inquiry. *
                            </label>
                          </div>

                          <button 
                            type="submit" 
                            className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Sending <span className="loading-spinner"></span></>
                            ) : (
                              <>Send Message <FiArrowRight className="btn-icon" /></>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* Quick Connect Section */}
                    <div className="quick-connect">
                      <h3>Quick Connect</h3>
                      <div className="quick-buttons">
                        <a href="https://wa.me/917012510512" target="_blank" rel="noopener noreferrer" className="quick-btn">
                          <IoLogoWhatsapp className="quick-icon" />
                          <span className="quick-label">WhatsApp</span>
                          <span className="quick-status">Available 24/7</span>
                        </a>
                        <a href="https://www.instagram.com/rolobee.in?igsh=N3Jhb21zamNrYmFw" target="_blank" rel="noopener noreferrer" className="quick-btn">
                          <IoLogoInstagram className="quick-icon" />
                          <span className="quick-label">Instagram</span>
                          <span className="quick-status">@rolobee</span>
                        </a>
                        <a href="https://www.linkedin.com/company/rolobee/" target="_blank" rel="noopener noreferrer" className="quick-btn">
                          <IoLogoLinkedin className="quick-icon" />
                          <span className="quick-label">LinkedIn</span>
                          <span className="quick-status">/company/rolobee</span>
                        </a>
                        <a href="https://maps.app.goo.gl/j4cLzoPw1pUGR9EeA" target="_blank" rel="noopener noreferrer" className="quick-btn">
                          <IoLocationOutline className="quick-icon" />
                          <span className="quick-label">Map</span>
                          <span className="quick-status">/location</span>
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="business-hours">
                      <h3>Business Hours</h3>
                      <div className="hours-grid">
                        <div className="hour-item">
                          <span className="day">Monday - Friday</span>
                          <span className="time">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="hour-item">
                          <span className="day">Saturday</span>
                          <span className="time">10:00 AM - 2:00 PM</span>
                        </div>
                        <div className="hour-item">
                          <span className="day">Sunday</span>
                          <span className="time">Closed</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default App;