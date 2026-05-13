import "./Features.css";
import Link from "next/link";

export default function Features() {
  return (
    <section id="systems" className="section features">
      <div className="container">
        
        <div className="feature-block animate-fade-in">
          <div className="feature-content">
            <h2 className="feature-title">We Know the Systems that Get Results</h2>
            <p className="feature-text">
              The results speak for themselves: Our clients have generated massive revenue powered by the automation strategies and systems we designed and implemented. We know exactly what systems you need as we have whole of market access.
            </p>
            <Link href="#contact" className="button button-outline">
              Let's find out
            </Link>
          </div>
          <div className="feature-visual glass">
            <div className="visual-element">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
            </div>
          </div>
        </div>

        <div className="feature-block reverse animate-fade-in delay-200">
          <div className="feature-content">
            <h2 className="feature-title">Don't fall into the AI trap</h2>
            <p className="feature-text">
              Many AI systems cost large monthly fees but what most businesses don't know is that the same agents we can build and deploy for a fraction of the price. AI sales bots, customer service, aftercare, job management and field management agents we will build specifically for your business needs.
            </p>
          </div>
          <div className="feature-visual glass">
            <div className="visual-circle-wrapper">
              <div className="visual-circle outer"></div>
              <div className="visual-circle inner"></div>
              <div className="visual-core">AI</div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card glass">
            <h3>Disruption-Free Deployment</h3>
            <p>We build automation that plugs straight into your existing systems for fast, disruption-free deployment.</p>
          </div>
          <div className="feature-card glass">
            <h3>Expert Support</h3>
            <p>With proven processes and expert support, your team adopts new tools smoothly and confidently.</p>
          </div>
          <div className="feature-card glass">
            <h3>Streamlined Operations</h3>
            <p>Boost efficiency and growth with smart automation - AI chatbots, CRM systems, and reporting dashboards.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
