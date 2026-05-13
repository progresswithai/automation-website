import "./about.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
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
        <div className="container">
          <h1 className="about-title">About The A.I.A.A.</h1>
          <p className="about-desc">
            The AI Automation Agency was born out of a simple realisation — the incredible value that intelligent automation brings to everyday business. After creating automation systems for our own companies and the businesses we’ve worked with, the results spoke for themselves. Efficiency improved. Sales soared. Workloads shrank. That’s when we knew this wasn’t just the future — it was the now.
          </p>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="about-evolution">
        <div className="container evolution-container">
          <div className="evolution-content">
            <h2>How We Evolved</h2>
            <p>Our roots began in search engine optimisation, helping businesses grow online visibility and attract high-quality leads. But as digital landscapes evolved, so did we. SEO naturally led us deeper into automation — from CRM optimisation and reporting dashboards to AI-driven content workflows — creating smarter, faster, and more streamlined operations for the businesses we support.</p>
            <p>Today, we help companies increase productivity and revenue with fewer manual hours. Our clients experience smoother workflows, real-time insights through automated reporting, and happier teams who finally have time to focus on meaningful work. The result? Improved efficiency, better decision-making, and an elevated customer experience that keeps people coming back.</p>
          </div>
          <div className="evolution-stats">
            <div className="stat-card highlight">
              <h3>2019</h3>
              <p>Automation started</p>
            </div>
            <div className="stat-card">
              <h3>150+</h3>
              <p>Companies</p>
            </div>
            <div className="stat-card">
              <h3>450+</h3>
              <p>Automations Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="values-title">Our Values it's Simple!</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Discovery and Analysis</h3>
              <p>We start by understanding your business goals, processes, and challenges to identify where automation can deliver the greatest impact.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📋</div>
              <h3>Strategy and Planning</h3>
              <p>A tailored roadmap is created, outlining automation opportunities, integration points, and measurable outcomes for your business.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Implementation and Optimisation</h3>
              <p>We design, build, and deploy automation systems, ensuring seamless integration and maximum efficiency across your operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Monitoring and Growth</h3>
              <p>After launch, we can continuously track performance, refine workflows, and scale your automation systems as your business evolves.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials 
        customTestimonials={aboutTestimonials}
        customTitle={<h2 className="testimonials-title">Some clients feedbacks</h2>}
      />

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="team-title">Our Executive Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Myles Robinson</h3>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Jamie Robinson</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container cta-container">
          <h2>We're looking for businesses who want to get 10 steps ahead</h2>
          <p>let us turn your business into a automation machine.</p>
          <Link href="/contact-us" className="button button-primary">Book Call</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
