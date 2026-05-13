"use client";

import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo-container">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7L3 17L12 22L21 17L21 7L12 2Z" fill="#1b7a63"/>
              <path d="M12 22V12M12 12L3 7M12 12L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
          </div>
          <div className="logo-text">
            The AI<br/>Automation<br/>Agency
          </div>
        </Link>
        
        <nav className="nav">
          <Link href="/ai-systems" className="nav-link">AI Systems</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/advice" className="nav-link">Advice</Link>
          <Link href="/contact-us" className="nav-link">Contact</Link>
          <a href="tel:03330510634" className="nav-link phone-link">0333 051 0634</a>
        </nav>
        
        <div className="header-actions">
          <Link href="/contact-us" className="button button-primary header-btn">Get Automated</Link>
          <div className="theme-toggle">
            <div className="toggle-track">
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
