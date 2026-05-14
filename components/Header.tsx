"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          
          {/* Left Area: Logo & Nav Links */}
          <div className="header-left">
            <Link href="/" className="logo-container">
              <Image 
                src="/assets/images/logo.png" 
                alt="The AI Automation Agency" 
                className="logo-image" 
                height={38} 
                width={150}
                style={{ width: "auto", height: "38px", objectFit: "contain" }} 
                priority 
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="desktop-nav">
              <Link href="/ai-systems" className="nav-link">AI Systems</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/advice" className="nav-link">Advice</Link>
              <Link href="/contact-us" className="nav-link">Contact</Link>
              <a href="tel:+917057045814" className="nav-link phone-link">+91 70570 45814</a>
            </nav>
          </div>

          {/* Right Area: Action CTA & Mobile Toggle */}
          <div className="header-right">
            
            {/* Desktop Action CTA Button */}
            <Link href="/contact-us" className="get-automated-btn">
              Get Automated
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Sidebar Off-canvas Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <div className="mobile-nav-bar" onClick={(e) => e.stopPropagation()}>
          
          {/* Header of Mobile Menu */}
          <div className="mobile-nav-header">
            <Link href="/" className="logo-container" onClick={toggleMobileMenu}>
              <Image 
                src="/assets/images/logo.png" 
                alt="The AI Automation Agency" 
                className="logo-image" 
                height={34} 
                width={130}
                style={{ width: "auto", height: "34px", objectFit: "contain" }} 
              />
            </Link>
            <button className="mobile-nav-close-btn" onClick={toggleMobileMenu} aria-label="Close Mobile Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="mobile-links-list">
            <Link href="/ai-systems" className="mobile-nav-link" onClick={toggleMobileMenu}>AI Systems</Link>
            <Link href="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</Link>
            <Link href="/advice" className="mobile-nav-link" onClick={toggleMobileMenu}>Advice</Link>
            <Link href="/contact-us" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</Link>
            <a href="tel:+917057045814" className="mobile-nav-link mobile-phone-link" onClick={toggleMobileMenu}>+91 70570 45814</a>
            
            <div className="mobile-nav-action-wrapper">
              <Link href="/contact-us" className="mobile-get-automated-btn" onClick={toggleMobileMenu}>
                Get Automated
              </Link>
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}
