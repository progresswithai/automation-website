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
  const posts = [
    { title: "Why Most UK Companies Fail With AI Automation", author: "Myles Robinson", date: "Oct 25, 2025" },
    { title: "Why Choose AI Automation For Your Business Benefits", author: "Jamie Robinson", date: "Oct 23, 2025" },
    { title: "AI in Business: The Ultimate Guide", author: "Myles Robinson", date: "Oct 20, 2025" },
    { title: "How AI Is Transforming UK Home Improvement Companies", author: "Jamie Robinson", date: "Oct 18, 2025" }
  ];

  return (
    <section className="extra-section soft-bg">
      <div className="container">
        <div className="posts-header">
          <h2 className="extra-title">Latest posts and updates</h2>
          <Link href="/advice" className="view-all-link">View all posts →</Link>
        </div>
        <div className="posts-grid">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-image-placeholder"></div>
              <div className="post-content">
                <span className="post-meta">{post.author} • {post.date}</span>
                <h3 className="post-title"><Link href="/advice">{post.title}</Link></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="extra-section dark-bg">
      <div className="container text-center-wrapper">
        <h2 className="extra-title text-white">Speak to us today to get started</h2>
        <div className="extra-action">
          <Link href="/contact-us" className="button button-primary">Get started</Link>
        </div>
      </div>
    </section>
  );
}
