import React from 'react';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoLocationOutline } from 'react-icons/io5';

const Contact = ({
  onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen,
  formRef, formData, handleInputChange, handleSubmit, consent, handleCheckboxChange,
  isSubmitting, showSuccessMessage, showErrorMessage, setShowSuccessMessage, setShowErrorMessage
}) => {
  return (
    <div className="contact-page premium-page">
      <Navbar
        onBack={onBack}
        logo={logo}
        navItems={navItems}
        setPage={setPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="contact"
      />

      <div className="contact-content premium-content-section">
        <div className="content-body">
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
                    <h4>Call/Whatsapp us</h4>
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
                  <a href="https://wa.me/917012510512" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                    <IoLogoWhatsapp className="social-icon" />
                    <span className="social-text">WhatsApp</span>
                  </a>
                  <a href="https://www.instagram.com/rolobee.in" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                    <IoLogoInstagram className="social-icon" />
                    <span className="social-text">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/company/rolobee" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                    <IoLogoLinkedin className="social-icon" />
                    <span className="social-text">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

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
                    I agree to the processing of my personal data. *
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

          <div className="quick-connect">
            <h3>Quick Connect</h3>
            <div className="quick-buttons">
              <a href="https://wa.me/917012510512" target="_blank" rel="noopener noreferrer" className="quick-btn">
                <IoLogoWhatsapp className="quick-icon" />
                <span className="quick-label">WhatsApp</span>
                <span className="quick-status">Available 24/7</span>
              </a>
              <a href="https://www.instagram.com/rolobee.in" target="_blank" rel="noopener noreferrer" className="quick-btn">
                <IoLogoInstagram className="quick-icon" />
                <span className="quick-label">Instagram</span>
                <span className="quick-status">@rolobee</span>
              </a>
              <a href="https://www.linkedin.com/company/rolobee" target="_blank" rel="noopener noreferrer" className="quick-btn">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
