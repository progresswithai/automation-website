import "./Testimonials.css";

export default function Testimonials({ customTestimonials, customTitle }: { customTestimonials?: {text: string, author: string}[], customTitle?: React.ReactNode }) {
  const defaultTestimonials = [
    {
      text: "This team made AI simple and accessible for my small business. They automated repetitive tasks and saved us hours every week. I finally have time to focus on growth instead of paperwork.",
      author: "London Lawyer Client"
    },
    {
      text: "We needed AI but didn't know where to start—this agency guided us every step. Their custom automation boosted our sales team's efficiency and streamlined operations. The ROI was almost immediate.",
      author: "Solar Panel Client"
    },
    {
      text: "I've seen plenty of 'AI solutions,' but this team actually delivers results. They combine strategy with technology to solve real business problems. I recommend them to any business serious about future-proofing.",
      author: "Online Pharmacy Client"
    },
    {
      text: "Our enterprise had complex, outdated workflows, and they transformed everything with AI automation. Departments are now connected, and reporting happens in real time. It's been a game-changer for productivity.",
      author: "SAAS Client"
    }
  ];

  const testimonials = customTestimonials || defaultTestimonials;

  return (
    <section className="testimonials-section">
      <div className="container">
        {customTitle ? (
          customTitle
        ) : (
          <h2 className="testimonials-title animate-fade-in">
            Don't just take our <span className="title-highlight-wrapper"><span className="title-highlight">words.</span></span>
          </h2>
        )}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h6>{testimonial.author}</h6>
                  <span className="author-verified">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
