import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        
        <div className="footer-top animate-fade-in">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L3 17L12 22L21 17L21 7L12 2Z" fill="#1b7a63"/>
                  <path d="M12 22V12M12 12L3 7M12 12L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              <h3>The AI<br/>Automation<br/>Agency</h3>
            </div>
            <p className="footer-desc">A Leading AI Automation Agency focussing on bespoke AI for businesses of all sizes.</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><Link href="/ai-systems">Ai Automation</Link></li>
                <li><Link href="/ai-systems">Systems</Link></li>
                <li><Link href="/#pricing">Packages</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/contact-us">Contact</Link></li>
                <li><a href="tel:03330510634">0333 051 0634</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link href="/advice">Blog</Link></li>
                <li><Link href="/advice">Help center</Link></li>
                <li><Link href="/contact-us">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AI Automation Agency, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
