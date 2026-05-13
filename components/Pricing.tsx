import "./Pricing.css";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header animate-fade-in">
          <h2 className="pricing-title">Simple flexible pricing.</h2>
          <p className="pricing-subtitle">Work short-term or long-term. Your choice.</p>
        </div>

        <div className="pricing-grid">
          {/* Card 1 */}
          <div className="pricing-card animate-fade-in">
            <div className="pricing-card-header">
              <span className="pricing-tier">90 day fast-track</span>
              <div className="pricing-price">£call</div>
              <p className="pricing-desc">Done-for-you in 90 days with ongoing support available</p>
            </div>
            <ul className="pricing-features">
              <li>90 days done-for-you</li>
              <li>Weekly progress calls</li>
              <li>Full AI end-to-end journey</li>
              <li>Bespoke for your business</li>
              <li>Quick wins in month 1</li>
              <li>ROI guaranteed</li>
            </ul>
            <Link href="#contact" className="button button-outline pricing-btn">Book a Call &gt;</Link>
            <div className="pricing-guarantee">Money back guarantee*</div>
          </div>

          {/* Card 2 */}
          <div className="pricing-card popular animate-fade-in delay-100">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-card-header">
              <span className="pricing-tier">Retainer</span>
              <div className="pricing-price">£call</div>
              <p className="pricing-desc">Ongoing monthly management with the latest updates</p>
            </div>
            <ul className="pricing-features">
              <li>Expert AI systems long term</li>
              <li>Weekly progress calls</li>
              <li>Full AI end-to-end journey</li>
              <li>Bespoke for your business</li>
              <li>Grows with your business</li>
              <li>Massive ROI long term</li>
            </ul>
            <Link href="#contact" className="button button-primary pricing-btn">Book a Call &gt;</Link>
            <div className="pricing-guarantee">Hands off for you. Hands on for us</div>
          </div>

          {/* Card 3 */}
          <div className="pricing-card animate-fade-in delay-200">
            <div className="pricing-card-header">
              <span className="pricing-tier">Support</span>
              <div className="pricing-price">£87</div>
              <p className="pricing-desc">Get experts on hand daily for AI support</p>
            </div>
            <ul className="pricing-features">
              <li>Access to AI experts daily</li>
              <li>Help for one brand/company</li>
              <li>Fast response times</li>
              <li>On hand to help</li>
              <li>Pick our brains</li>
              <li>Help with integration</li>
            </ul>
            <Link href="#contact" className="button button-outline pricing-btn">Get started &gt;</Link>
            <div className="pricing-guarantee">Billed monthly</div>
          </div>
        </div>
        
        <p className="pricing-tax-note">Prices exclude any applicable taxes.</p>
      </div>
    </section>
  );
}
