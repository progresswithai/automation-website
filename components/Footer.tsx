import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">

        {/* Footer Top Content */}
        <div className="footer-top">

          {/* Brand Presentation Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <Image
                src="/assets/images/logo.png"
                alt="The AI Automation Agency Logo"
                className="footer-logo-img"
                height={134}
                width={134}
                style={{ width: "auto", height: "134px", objectFit: "contain", marginBottom: "1rem", color: "transparent" }}
              />
            </Link>
            <p className="footer-brand-tagline">
              A Leading AI Automation Agency focussing on bespoke AI for businesses of all sizes.
            </p>
            <div className="footer-contact-info" style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
              <p style={{ margin: "0.3rem 0" }}>Nal Stop, Pune Maharashtra</p>
              <p style={{ margin: "0.3rem 0" }}><a href="mailto:progresswithai@gmail.com" style={{ color: "inherit" }}>progresswithai@gmail.com</a></p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-columns-wrapper">

            {/* Column 1: Product */}
            <div className="footer-link-column">
              <h4 className="footer-column-title">Product</h4>
              <ul className="footer-links-list">
                <li><Link href="/ai-systems">Ai Automation</Link></li>
                <li><Link href="/ai-systems">Systems</Link></li>
                <li><Link href="/#pricing">Packages</Link></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="footer-link-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links-list">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/contact-us">Contact</Link></li>
                <li><a href="tel:+917057045814">+91 70570 45814</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-link-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links-list">
                <li><Link href="/advice">Blog</Link></li>
                <li><Link href="/advice">Help center</Link></li>
                <li><Link href="/contact-us">Support</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom Metadata & Social Row */}
        <div className="footer-bottom-row">

          <div className="footer-bottom-left">
            <p className="footer-copyright-text">
              AI Automation Agency 2025, All rights reserved.
            </p>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-social-channels">

              {/* LinkedIn */}
              <Link href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link href="#" className="footer-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link href="#" className="footer-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/profile.php?id=61583797345208" className="footer-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
