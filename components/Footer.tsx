import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-cta animate-fade-in">
          <h2 className="cta-title">Speak to us today to get started</h2>
          <Link href="mailto:contact@antigravity.ai" className="button button-primary button-large cta-btn">
            Get started
          </Link>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">The AI Automation Agency</h3>
            <p className="footer-desc">A Leading AI Automation Agency focussing on bespoke AI for businesses of all sizes.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><Link href="#systems">AI Automation</Link></li>
                <li><Link href="#systems">Systems</Link></li>
                <li><Link href="#pricing">Packages</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="#about">About us</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><a href="tel:03330510634">0333 051 0634</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link href="#advice">Blog</Link></li>
                <li><Link href="#advice">Help center</Link></li>
                <li><Link href="#contact">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The AI Automation Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
