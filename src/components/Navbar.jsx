import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ onBack, logo, navItems, setPage, mobileMenuOpen, setMobileMenuOpen, currentPage }) => {
  return (
    <nav className="main-navbar glass-nav">
      <div className="nav-left">
        <button className="back-btn nav-back-btn" onClick={onBack}>
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
            className={navItem.id === currentPage ? 'active' : ''}
            onClick={() => { setPage(navItem.id); setMobileMenuOpen(false); }}
          >
            {navItem.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
