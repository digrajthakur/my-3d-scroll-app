'use client';

import { useState } from 'react';
import Link from 'next/link';
import './Header.css'; // Import the custom CSS file

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo"><a href="#">Deepanshu</a></div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`}>
              <span>{link}</span>
            </Link>
          ))}
          <a href='#contact' className="contact-btn">CONTACT US</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)}>
            <span>{link}</span>
          </Link>
        ))}
        <a href='#contact' className="contact-btn">CONTACT US</a>
      </div>
    </header>
  );
}