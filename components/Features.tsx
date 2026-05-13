import "./Features.css";
import Link from "next/link";

export default function Features() {
  return (
    <section id="systems" className="features-section">
      <div className="container">
        
        {/* Main Features Grid */}
        <div className="features-header animate-fade-in">
          <div className="section-badge">MAIN FEATURES</div>
          <h2>Leading AI Companies We Work With</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card highlight-card">
            <div className="feature-icon">🤖</div>
            <h3>Custom AI Agents</h3>
            <p>AI sales bots, customer service, aftercare, and job management agents built specifically for your business needs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Disruption-Free</h3>
            <p>We build automation that plugs straight into your existing systems for fast, disruption-free deployment.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Streamlined Ops</h3>
            <p>Boost efficiency and growth with smart automation - CRM systems, and reporting dashboards.</p>
          </div>
        </div>

        {/* 100+ Uses */}
        <div className="uses-section">
          <h2>100+ Uses For Ai Systems in Your Business!</h2>
          <div className="uses-grid">
            <div className="use-pill">📊 Marketing</div>
            <div className="use-pill">💬 Customer Service</div>
            <div className="use-pill">💼 Sales & CRM</div>
            <div className="use-pill">👥 HR & Recruiting</div>
            <div className="use-pill">📅 Scheduling</div>
            <div className="use-pill">📝 Data Entry</div>
            <div className="use-pill">📱 Social Media</div>
            <div className="use-pill">⚙️ Operations</div>
          </div>
          <div className="uses-action">
            <Link href="#contact" className="button button-outline">Learn More</Link>
          </div>
        </div>

      </div>

      {/* Split Section */}
      <div className="split-section">
        <div className="container split-container">
          <div className="split-visual">
            <div className="visual-diagram">
              <div className="diagram-node center">⚙️ Zapier</div>
              <div className="diagram-node top">Conversion</div>
              <div className="diagram-node left">Awareness</div>
              <div className="diagram-node right">Retention</div>
            </div>
          </div>
          <div className="split-content">
            <h2 className="split-title">We Know the Systems that Get Results</h2>
            <p className="split-text">
              The results speak for themselves: Our clients have generated over £45 million in combined revenue in the last two years alone, powered by the automation strategies and systems we designed and implemented.
            </p>
            <Link href="#contact" className="button button-light">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
