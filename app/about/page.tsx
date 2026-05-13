import "./about.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Link from "next/link";

export default function AboutPage() {
  const aboutTestimonials = [
    {
      text: "This team made AI simple and accessible for my small business. They automated repetitive tasks and saved us hours every week. I finally have time to focus on growth instead of paperwork.",
      author: "London Lawyer Client"
    },
    {
      text: "We needed AI but didn’t know where to start—this agency guided us every step. Their custom automation boosted our sales team’s efficiency and streamlined operations. The ROI was almost immediate.",
      author: "Solar Panel Client"
    },
    {
      text: "Our enterprise had complex, outdated workflows, and they transformed everything with AI automation. Departments are now connected, and reporting happens in real time. It’s been a game-changer for productivity.",
      author: "SAAS Client"
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-container">
          {/* Decorative absolute stars */}
          <div className="about-star star-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-1.svg" alt="star" />
          </div>
          <div className="about-star star-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-2.svg" alt="star" />
          </div>

          <h1 className="about-title">About The A.I.A.A.</h1>
          <p className="about-desc">
            The AI Automation Agency was born out of a simple realisation — the incredible value that intelligent automation brings to everyday business. After creating automation systems for our own companies and the businesses we’ve worked with, the results spoke for themselves. Efficiency improved. Sales soared. Workloads shrank. That’s when we knew this wasn’t just the future — it was the now.
          </p>

          {/* Side-by-side premium image cards */}
          <div className="about-hero-images">
            <div className="about-hero-img-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/hero-about-01.webp" 
                alt="Workspace Office Monochrome" 
                className="about-hero-image"
              />
            </div>
            <div className="about-hero-img-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Untitled-design-7.jpg" 
                alt="Jamie and Myles automating in office" 
                className="about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Row */}
      <section className="about-brands-section">
        <div className="container">
          <div className="about-brands-track">
            <div className="about-brands-slider">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Hubspot.png" alt="HubSpot" className="about-brand-logo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/zoho.png" alt="Zoho" className="about-brand-logo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/zapier.png" alt="Zapier" className="about-brand-logo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/salesforce.png" alt="Salesforce" className="about-brand-logo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/monday.png" alt="Monday.com" className="about-brand-logo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/pipedrive.png" alt="Pipedrive" className="about-brand-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="about-evolution">
        <div className="container evolution-container">
          <h2 className="evolution-title">How We Evolved</h2>
          
          <div className="evolution-desc-container">
            <p className="evolution-desc">
              Our roots began in search engine optimisation, helping businesses grow online visibility and attract high-quality leads. But as digital landscapes evolved, so did we. SEO naturally led us deeper into automation — from CRM optimisation and reporting dashboards to AI-driven content workflows — creating smarter, faster, and more streamlined operations for the businesses we support.
            </p>
            <p className="evolution-desc">
              Today, we help companies increase productivity and revenue with fewer manual hours. Our clients experience smoother workflows, real-time insights through automated reporting, and happier teams who finally have time to focus on meaningful work. The result? Improved efficiency, better decision-making, and an elevated customer experience that keeps people coming back.
            </p>
          </div>

          <div className="evolution-stats-row">
            <div className="evolution-stat-col">
              <span className="evolution-stat-number">2023</span>
              <p className="evolution-stat-label">Automation started</p>
            </div>
            
            <div className="evolution-stat-col">
              <span className="evolution-stat-number">35</span>
              <p className="evolution-stat-label">Companies</p>
            </div>
            
            <div className="evolution-stat-col">
              <span className="evolution-stat-number">100k</span>
              <p className="evolution-stat-label">Automations Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="values-title">Our Values it’s Simple!</h2>
          <div className="values-grid">
            
            {/* Value Card 1 */}
            <div className="value-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/lighbulb-1.png" alt="Lightbulb" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/icon-diamond-dark.svg" alt="Diamond Dark" />
              <h3 className="value-heading">Discovery and Analysis</h3>
              <p className="value-desc">We start by understanding your business goals, processes, and challenges to identify where automation can deliver the greatest impact.</p>
            </div>

            {/* Value Card 2 */}
            <div className="value-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/ai-brain-1.png" alt="AI Brain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/icon-trophy-dark.svg" alt="Trophy Dark" />
              <h3 className="value-heading">Strategy and Planning</h3>
              <p className="value-desc">A tailored roadmap is created, outlining automation opportunities, integration points, and measurable outcomes for your business.</p>
            </div>

            {/* Value Card 3 */}
            <div className="value-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/cog-1.png" alt="Cog" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/icon-globe-dark.svg" alt="Globe Dark" />
              <h3 className="value-heading">Implementation and Optimisation</h3>
              <p className="value-desc">We design, build, and deploy automation systems, ensuring seamless integration and maximum efficiency across your operations.</p>
            </div>

            {/* Value Card 4 */}
            <div className="value-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/success-1.png" alt="Success" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="value-img hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/icon-crown-dark.svg" alt="Crown Dark" />
              <h3 className="value-heading">Monitoring and Growth</h3>
              <p className="value-desc">After launch, we can continuously track performance, refine workflows, and scale your automation systems as your business evolves.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Client Feedbacks Section */}
      <section className="about-feedbacks">
        <div className="container">
          <h2 className="feedbacks-title">Some clients feedbacks</h2>
          <div className="feedbacks-grid">
            
            {aboutTestimonials.map((item, idx) => (
              <div key={idx} className="feedback-grid-card">
                <div className="feedback-card-top">
                  <div className="feedback-stars-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img decoding="async" className="feedback-stars block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/5-stars-orange.png" alt="5 Stars" />
                    {/* Dark mode stars if needed - currently empty src in user HTML, so we just hide the light one */}
                  </div>
                  <p className="feedback-text">{item.text}</p>
                </div>
                <div className="feedback-card-bottom">
                  <h6 className="feedback-author">{item.author}</h6>
                </div>
              </div>
            ))}
            
          </div>
          <div className="feedbacks-actions">
            <a href="#" target="_blank" rel="nofollow" className="feedbacks-link">
              <span>See all feedbacks</span>
              <i className="icon unicon-arrow-right">→</i>
            </a>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="about-executive-team">
        <div className="container">
          <h2 className="executive-team-title">Our Executive Team</h2>
          <div className="executive-team-grid">
            <div className="executive-team-member">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="executive-team-img" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/1736887255947.jpeg" alt="Myles Robinson" />
              <div className="executive-team-info">
                <h6 className="executive-team-name">Myles Robinson</h6>
                <span className="executive-team-role">Founder & CEO</span>
              </div>
            </div>
            <div className="executive-team-member">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="executive-team-img" src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Jamie-Robinson-2.png" alt="Jamie Robinson" />
              <div className="executive-team-info">
                <h6 className="executive-team-name">Jamie Robinson</h6>
                <span className="executive-team-role">Strategist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container cta-container relative">
          {/* Decorative Stars */}
          <div className="cta-star cta-star-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-1.svg" loading="lazy" alt="Star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-white-1.svg" loading="lazy" alt="Star Dark" />
          </div>
          <div className="cta-star cta-star-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-2.svg" loading="lazy" alt="Star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-white-2.svg" loading="lazy" alt="Star Dark" />
          </div>

          <h2 className="cta-title">We’re looking for businesses who want to get 10 steps ahead</h2>
          <p className="cta-desc">let us turn your business into a automation machine.</p>
          <Link href="/contact-us" className="button button-primary">Book Call</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
