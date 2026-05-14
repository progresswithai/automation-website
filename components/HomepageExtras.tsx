import Link from "next/link";
import "./HomepageExtras.css";

export function AgencyIntro() {
  return (
    <section className="extra-section soft-bg">
      <div className="container">
        <div className="text-center-wrapper">
          <h2 className="extra-title">The AI Automation Agency</h2>
          <p className="extra-desc">
            At The AI Automation Agency we tell you exactly what to do, what systems to use, and why they work. Then, we help you put it all in place.
          </p>
          <p className="extra-desc">
            We have whole of market access which means we will propose and integrate the most cost effective AI automations. We also create custom built agents without having to pay expensive software companies for the same agents.
          </p>
          <div className="extra-action">
            <Link href="/contact-us" className="button button-primary">Book a Call</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiTrap() {
  return (
    <section className="extra-section dark-bg">
      <div className="container">
        <div className="text-center-wrapper">
          <h2 className="extra-title text-white">Don't fall into the AI trap</h2>
          <div className="extra-action margin-bottom-2">
            <Link href="/contact-us" className="button button-outline light-outline">Let's find out</Link>
          </div>
          <p className="extra-desc text-gray">
            Many AI systems cost large monthly fees but what most businesses don't know is that the same agents we can build and deploy for a fraction of the price. AI sales bots, customer service, aftercare, job management and field management agents we will build specifically for your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HandsOff() {
  return (
    <section className="extra-section highlight-bg">
      <div className="container">
        <div className="text-center-wrapper">
          <h2 className="extra-title text-dark">We create hands-off AI systems for you,</h2>
          <p className="extra-desc text-dark-muted">
            We build automation that plugs straight into your existing systems for fast, disruption-free deployment. With proven processes and expert support, your team adopts new tools smoothly and confidently.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LatestPosts() {
  const horizontalPosts = [
    {
      title: "Why Choose AI Automation For Your Business Benefits",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/Add-a-heading-960-x-640-px-768x403.jpg",
      date: "October 23, 2025",
      link: "https://theaiautomationagency.ai/why-choose-ai-automation-for-your-business-benefits/"
    },
    {
      title: "AI in Business",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/ai-in-business-768x432.jpg",
      date: "October 31, 2025",
      link: "https://theaiautomationagency.ai/ai-in-business/"
    },
    {
      title: "How AI Is Transforming UK Home Improvement Companies",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/11/ai-for-solar-and-heat-pumps-installation-768x432.png",
      date: "November 10, 2025",
      link: "https://theaiautomationagency.ai/how-ai-is-transforming-uk-home-improvement-companies/"
    }
  ];

  return (
    <section id="insights" className="insights-section">
      <div className="container insights-container">
        
        {/* Insights Top Row */}
        <div className="insights-header-row">
          <div className="insights-header-left">
            {/* Section Pill Badge */}
            <div className="insights-badge-wrapper animate-fade-in">
              <div className="insights-badge">
                <span className="insights-badge-dot"></span>
                Insights
              </div>
            </div>
            
            <h2 className="insights-section-title animate-fade-in">
              Latest posts <span className="insights-highlight">and updates</span>
            </h2>
          </div>

          <div className="insights-header-right animate-fade-in">
            <Link href="/advice" className="insights-view-all-btn">
              View all posts
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="insights-btn-arrow">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="insights-grid">
          
          {/* Column 1 (Left): Large Featured Card */}
          <div className="insights-featured-col animate-fade-in">
            <article className="featured-post-card">
              <div className="featured-post-content">
                <h3 className="featured-post-title">
                  <Link href="https://theaiautomationagency.ai/why-most-uk-companies-fail-with-ai-automation/" target="_blank">
                    Why Most UK Companies
                  </Link>
                </h3>
                <p className="featured-post-excerpt">
                  Artificial intelligence (AI) is transforming the way UK companies operate, promising faster processes, lower costs, and better customer experiences. Yet despite the hype, most UK
                </p>
                
                {/* Author Info */}
                <div className="featured-post-author-row">
                  <div className="author-meta-details-wrap" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src="https://ui-avatars.com/api/?name=Pranay+Pise&background=1b7a63&color=fff" 
                      alt="Pranay Pise" 
                      className="author-avatar-img"
                    />
                    <div className="author-meta-details">
                      <span className="author-meta-name" style={{ fontWeight: '600', color: 'var(--foreground)' }}>
                        Pranay Pise
                      </span>
                      <span className="author-meta-date">November 11, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Column 2 (Right): Horizontal List Stack */}
          <div className="insights-list-col animate-fade-in">
            <div className="horizontal-posts-stack">
              {horizontalPosts.map((post, idx) => (
                <article key={idx} className="horizontal-post-card">
                  <div className="horizontal-card-inner">
                    {/* Featured Image */}
                    <div className="horizontal-post-img-box">
                      <img src={post.image} alt={post.title} className="horizontal-post-img" />
                    </div>
                    
                    {/* Details content */}
                    <div className="horizontal-post-details">
                      <span className="horizontal-post-date">{post.date}</span>
                      <h4 className="horizontal-post-title">
                        <Link href={post.link} target="_blank">
                          {post.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}export function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-container">
        
        {/* Floating Card Wrapper */}
        <div className="final-cta-card">
          <div className="final-cta-grid">
            
            {/* Left Content Column */}
            <div className="final-cta-left">
              <h2 className="final-cta-title">
                The Future Belongs to Those Who Automate Today
              </h2>
              <p className="final-cta-subtitle">
                Speak to us today to get started
              </p>
              
              <div className="final-cta-action">
                <Link href="/contact-us" className="final-cta-btn">
                  Get started
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="final-cta-btn-arrow">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Graphic/Mockup Column */}
            <div className="final-cta-right">
              <div className="final-cta-img-box">
                <img 
                  loading="lazy" 
                  src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/home-06-builder-tools.webp" 
                  alt="Builder Tools Automation Mockup" 
                  className="final-cta-img"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
