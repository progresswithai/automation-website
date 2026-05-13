import "./advice.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdvicePage() {
  const posts = [
    {
      category: "Guides",
      author: "Myles Robinson",
      date: "October 23, 2025",
      title: "Why Choose AI Automation For Your Business Benefits",
      summary: "Unlock Efficiency and Growth with AI Automation. Discover how transforming your...",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" // placeholder for solar panels
    },
    {
      category: "AI in Business",
      author: "Myles Robinson",
      date: "October 18, 2025",
      title: "How AI Is Transforming UK Home Improvement Companies",
      summary: "Artificial intelligence is reshaping industries across the UK...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
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
                <div className="blog-image-wrapper">
                  <span className="blog-category">{post.category}</span>
                  {/* We use standard img here for simple placeholder. Next/Image is better but requires config for external domains */}
                  <img src={post.image} alt={post.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-avatar"></div>
                    <span>{post.author}</span>
                    <span className="meta-dot">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="blog-post-title">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="blog-post-summary">{post.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
