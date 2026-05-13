import "./Features.css";
import Link from "next/link";

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        
        {/* Main Section Header */}
        <div className="features-section-header animate-fade-in">
          <div className="features-badge">
            <span className="features-badge-dot"></span>
            Main features
          </div>
          <h2 className="features-main-title">
            The <span className="title-brand-highlight">AI Automation</span> Agency
          </h2>
          <p className="features-main-subtitle">
            At The AI Automation Agency we tell you exactly what to do, what systems to use, and why they work. Then, we help you put it all in place.
          </p>
        </div>

        {/* 2x2 Grid of High-Fidelity Feature Cards */}
        <div className="features-grid-container">
          
          {/* Card 1: Top Left - Market Access */}
          <div className="features-grid-card card-market-access animate-fade-in">
            <div className="card-top-content">
              <p className="block-body-text text-dark-muted">
                We have whole of market access which means we will propose and integrate the most cost effective AI automations. We also create custom built agents without having to pay expensive software companies for the same agents.
              </p>
              <div className="block-action">
                <Link href="/contact-us" className="button button-primary features-btn btn-dark-emerald">
                  Book a Call
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="card-bottom-image">
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Screenshot-2025-10-28-at-13.53.15.png" 
                alt="Ops and Automation flow" 
                className="card-screenshot rounded-top"
              />
            </div>
          </div>

          {/* Card 2: Top Right - Systems & Results */}
          <div className="features-grid-card card-systems-results animate-fade-in">
            <div className="card-top-image-center">
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/zapier_circle_transparent.png" 
                alt="Zapier Circle Diagram" 
                className="card-diagram"
              />
            </div>
            <div className="card-bottom-content">
              <h2 className="block-title text-white">We Know the Systems that Get Results</h2>
              <p className="block-body-text text-light-gray-muted">
                The results speak for themselves: Our clients have generated over £45 million in combined revenue in the last two years alone, powered by the automation strategies and systems we designed and implemented.
                <br /><br />
                We know exactly what systems you need as we have whole of market access.
              </p>
              <div className="block-action">
                <Link href="/contact-us" className="button button-light features-btn btn-white-pill">
                  Book a Call
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Left - AI Trap Protection */}
          <div className="features-grid-card card-ai-trap animate-fade-in">
            <div className="card-top-image-full">
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/AI-automation-agency-image-scaled.jpg" 
                alt="AI Trap protection" 
                className="card-full-bleed-image"
              />
            </div>
            <div className="card-bottom-content">
              <h2 className="block-title text-white">Don't fall into the AI trap</h2>
              <div className="block-action">
                <Link href="/contact-us" className="button button-outline features-btn btn-trap-out">
                  Let's find out
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <p className="block-body-text text-light-gray-muted">
                Many AI systems cost large monthly fees but what most businesses don't know is that the same agents we can build and deploy for a fraction of the price. AI sales bots, customer service, aftercare, job management and field management agents we will build specifically for your business needs.
              </p>
            </div>
          </div>

          {/* Card 4: Bottom Right - Hands-off Deployments */}
          <div className="features-grid-card card-hands-off animate-fade-in">
            <div className="card-top-content">
              <h2 className="block-title text-dark">We create hands-off AI systems for you,</h2>
              <p className="block-body-text text-dark-muted">
                We build automation that plugs straight into your existing systems for fast, disruption-free deployment. With proven processes and expert support, your team adopts new tools smoothly and confidently.
              </p>
            </div>
            <div className="card-bottom-image">
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Screenshot-2025-10-28-at-13.56.33.jpg" 
                alt="Hands off workflows automation" 
                className="card-screenshot rounded-top"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


