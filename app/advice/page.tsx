import "./advice.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdvicePage() {
  const posts = [
    {
      category: "Guides",
      author: "Myles Robinson",
      authorAvatar: "https://secure.gravatar.com/avatar/5005a3783e368fc84c1b7ea3c064158075d7602573f5bcbf5ce268c2dedba565?s=40&d=mm&r=g",
      date: "October 23, 2025",
      title: "Why Choose AI Automation For Your Business Benefits",
      summary: "Unlock Efficiency: How AI Automation Consultants Can Transform Your UK Business In the fast-evolving digital economy,",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/Add-a-heading-960-x-640-px-768x403.jpg",
      link: "https://theaiautomationagency.ai/why-choose-ai-automation-for-your-business-benefits/"
    },
    {
      category: "Guides",
      author: "Myles Robinson",
      authorAvatar: "https://secure.gravatar.com/avatar/5005a3783e368fc84c1b7ea3c064158075d7602573f5bcbf5ce268c2dedba565?s=40&d=mm&r=g",
      date: "October 31, 2025",
      title: "AI in Business",
      summary: "AI In Business & What It Can Do For You Artificial intelligence is no longer a",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/ai-in-business-768x432.jpg",
      link: "https://theaiautomationagency.ai/ai-in-business/"
    },
    {
      category: "Guides",
      author: "Myles Robinson",
      authorAvatar: "https://secure.gravatar.com/avatar/5005a3783e368fc84c1b7ea3c064158075d7602573f5bcbf5ce268c2dedba565?s=40&d=mm&r=g",
      date: "November 10, 2025",
      title: "How AI Is Transforming UK Home Improvement Companies: Smarter Lead Generation, Sales, and CRMs",
      summary: "How AI Is Transforming UK Home Improvement Companies: Smarter Lead Generation, Sales, and CRMs  Artificial intelligence",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/11/ai-for-solar-and-heat-pumps-installation-768x432.png",
      link: "https://theaiautomationagency.ai/how-ai-is-transforming-uk-home-improvement-companies/"
    },
    {
      category: null,
      author: "Myles Robinson",
      authorAvatar: "https://secure.gravatar.com/avatar/5005a3783e368fc84c1b7ea3c064158075d7602573f5bcbf5ce268c2dedba565?s=40&d=mm&r=g",
      date: "November 11, 2025",
      title: "Why Most UK Companies Fail with AI Automation — and How to Get It Right",
      summary: "Artificial intelligence (AI) is transforming the way UK companies operate, promising faster processes, lower costs, and",
      image: null,
      link: "https://theaiautomationagency.ai/why-most-uk-companies-fail-with-ai-automation/"
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
              <img decoding="async" className="newsletter-img block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/newsletter.svg" loading="lazy" alt="Newsletter" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" className="newsletter-img hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/newsletter-dark.svg" loading="lazy" alt="Newsletter Dark" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
