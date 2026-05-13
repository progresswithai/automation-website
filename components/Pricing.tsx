import "./Pricing.css";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      {/* Background overlay gradient mask */}
      <div className="pricing-bg-gradient"></div>

      <div className="container pricing-container">
        
        {/* Section Pill Badge */}
        <div className="pricing-badge-wrapper animate-fade-in">
          <div className="pricing-badge">
            <span className="pricing-badge-dot"></span>
            Pricing
          </div>
        </div>

        {/* Section Titles */}
        <div className="pricing-title-container animate-fade-in">
          <h2 className="pricing-section-title">
            Simple <span className="pricing-flexible-highlight">flexible</span> pricing.
          </h2>
          <p className="pricing-section-subtitle">Work short-term or long-term. Your choice.</p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="pricing-grid">
          
          {/* Card 1: 90 Day Fast-Track */}
          <div className="tier-card animate-fade-in">
            <div className="tier-header">
              <h5 className="tier-name">90 day fast-track</h5>
              <div className="tier-price-row">
                <h3 className="tier-price">£call</h3>
                <span className="tier-period">/ 3 mo</span>
              </div>
              <p className="tier-desc">Done-for-you in <strong>90 days</strong> with ongoing support available</p>
              <Link href="/contact-us" className="tier-btn btn-peach">
                Book a Call &gt;
              </Link>
              <p className="tier-guarantee">Money back guarantee*</p>
            </div>
            
            <div className="tier-body">
              <ul className="tier-features-list">
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>90 days done-for-you</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Weekly progress calls</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Full AI end-to-end journey</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Bespoke for your business</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Quick wins in month 1</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>ROI guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Retainer (Popular) */}
          <div className="tier-card popular-card animate-fade-in">
            <div className="popular-ribbon">
              MOST POPULAR
            </div>
            <div className="tier-header">
              <h5 className="tier-name">Retainer</h5>
              <div className="tier-price-row">
                <h3 className="tier-price">£call</h3>
                <span className="tier-period">/ mo</span>
              </div>
              <p className="tier-desc">Ongoing <strong>monthly management</strong> with the latest updates</p>
              <Link href="/contact-us" className="tier-btn btn-emerald">
                Book a Call &gt;
              </Link>
              <p className="tier-guarantee">Hands off for you. Hands on for us</p>
            </div>
            
            <div className="tier-body">
              <ul className="tier-features-list">
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Expert AI systems long term</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Weekly progress calls</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Full AI end-to-end journey</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Bespoke for your business</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Grows with your business</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Massive ROI long term</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="tier-card animate-fade-in">
            <div className="tier-header">
              <h5 className="tier-name">Support</h5>
              <div className="tier-price-row">
                <h3 className="tier-price">£87</h3>
                <span className="tier-period">/ week</span>
              </div>
              <p className="tier-desc">Get experts <strong>on hand daily</strong> for AI support</p>
              <Link href="/contact-us" className="tier-btn btn-peach">
                Get started
              </Link>
              <p className="tier-guarantee">Billed monthly</p>
            </div>
            
            <div className="tier-body">
              <ul className="tier-features-list">
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Access to AI experts daily</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Help for one brand/company</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Fast response times</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>On hand to help</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Pick our brains</span>
                </li>
                <li>
                  <span className="tier-check-icon">✓</span>
                  <span>Help with integration</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Pricing Exclude Taxes Note */}
        <p className="pricing-tax-note">Prices exclude any applicable taxes.</p>

      </div>
    </section>
  );
}
