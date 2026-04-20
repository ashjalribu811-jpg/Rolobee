import React from 'react';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import './Footer.css';

const Footer = ({ logo, navItems, setPage }) => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Rolobee" className="footer-logo" />

          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li onClick={() => { setPage('home'); window.scrollTo(0, 0); }}>Home</li>
                {navItems.map(item => (
                  <li key={item.id} onClick={() => { setPage(item.id); window.scrollTo(0, 0); }}>{item.label}</li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li><IoCallOutline className="footer-icon" /> +91 7012510512</li>
                <li><IoMailOutline className="footer-icon" /> hello@rolobee.com</li>
                <li><IoLocationOutline className="footer-icon" /> Malappuram, India</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="footer-socials">
                <a href="https://wa.me/917012510512" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <IoLogoWhatsapp />
                </a>
                <a href="https://www.instagram.com/rolobee.in" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <IoLogoInstagram />
                </a>
                <a href="https://www.linkedin.com/company/rolobee" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <IoLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>© {new Date().getFullYear()} Rolobee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
