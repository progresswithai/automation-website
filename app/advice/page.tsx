import "./advice.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdvicePage() {
  const posts = [
    {
      category: "Guides",
      author: "Pranay Pise",
      authorAvatar: "/assets/images/pranay.png",
      date: "May 10, 2026",
      title: "The Future of AI Automation in Modern Business",
      summary: "Unlock Efficiency: How AI Automation can transform your business operations in the fast-evolving digital economy.",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/Add-a-heading-960-x-640-px-768x403.jpg",
      link: "/advice"
    },
    {
      category: "Guides",
      author: "Pranay Pise",
      authorAvatar: "/assets/images/pranay.png",
      date: "May 12, 2026",
      title: "Optimizing Your CRM with Intelligent Workflows",
      summary: "AI In Business & What It Can Do For You. Artificial intelligence is no longer just a futuristic concept.",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/ai-in-business-768x432.jpg",
      link: "/advice"
    },
    {
      category: "Guides",
      author: "Pranay Pise",
      authorAvatar: "/assets/images/pranay.png",
      date: "May 14, 2026",
      title: "How to Scale Your Operations Using Custom AI Agents",
      summary: "How AI is transforming modern companies with smarter lead generation, sales, and automated CRMs.",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/11/ai-for-solar-and-heat-pumps-installation-768x432.png",
      link: "/advice"
    },
    {
      category: "Strategic",
      author: "Pranay Pise",
      authorAvatar: "/assets/images/pranay.png",
      date: "May 15, 2026",
      title: "Maximizing ROI with Strategic AI Integration",
      summary: "Strategic AI integration is transforming the way companies operate, promising faster processes and lower costs.",
      image: null,
      link: "/advice"
    }
  ];

  return (
    <main>
      <Header />
      <section className="advice-page">
        <div className="container">
          <h1 className="advice-title">Blog — Classic</h1>
          
          <div className="blog-list">
            {posts.map((post, index) => (
              <div key={index} className="blog-card">
                {post.image && (
                  <div className="blog-image-wrapper">
                    {post.category && <span className="blog-category">{post.category}</span>}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} className="blog-image" />
                  </div>
                )}
                
                <div className="blog-content">
                  <div className="blog-meta">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.authorAvatar} alt={post.author} className="blog-avatar-img" />
                    <span className="blog-author">{post.author}</span>
                    <span className="meta-dot">•</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-post-title">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="blog-post-summary">{post.summary}</p>
                  
                  <Link href="#" className="blog-read-more">Continue reading</Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="advice-newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h2 className="newsletter-title">Get the latest updates</h2>
              <p className="newsletter-desc">Subscribe to get our most-popular proposal eBook and more top revenue content to help you send docs faster.</p>
              
              <div className="newsletter-form-wrap">
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address..." required className="newsletter-input" />
                  <button type="submit" className="button button-primary">Subscribe</button>
                </form>
              </div>
              
              <p className="newsletter-spam-text">Don't worry we don't spam.</p>
            </div>
            
            <div className="newsletter-image-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="newsletter-img light-only" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/newsletter.svg" loading="lazy" alt="Newsletter" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="newsletter-img dark-only" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/newsletter-dark.svg" loading="lazy" alt="Newsletter Dark" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
