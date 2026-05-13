import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "This team made AI simple and accessible for my small business. They automated repetitive tasks and saved us hours every week. I finally have time to focus on growth instead of paperwork.",
      author: "London Lawyer Client"
    },
    {
      text: "We needed AI but didn’t know where to start—this agency guided us every step. Their custom automation boosted our sales team’s efficiency and streamlined operations. The ROI was almost immediate.",
      author: "Solar Panel Client"
    },
    {
      text: "I’ve seen plenty of “AI solutions,” but this team actually delivers results. They combine strategy with technology to solve real business problems. I recommend them to any business serious about future-proofing.",
      author: "Online Pharmacy Client"
    },
    {
      text: "Our enterprise had complex, outdated workflows, and they transformed everything with AI automation. Departments are now connected, and reporting happens in real time. It’s been a game-changer for productivity.",
      author: "SAAS Client"
    },
    // Duplicate the 4 main items to create a seamless infinite loop in the conveyor marquee track
    {
      text: "This team made AI simple and accessible for my small business. They automated repetitive tasks and saved us hours every week. I finally have time to focus on growth instead of paperwork.",
      author: "London Lawyer Client"
    },
    {
      text: "We needed AI but didn’t know where to start—this agency guided us every step. Their custom automation boosted our sales team’s efficiency and streamlined operations. The ROI was almost immediate.",
      author: "Solar Panel Client"
    },
    {
      text: "I’ve seen plenty of “AI solutions,” but this team actually delivers results. They combine strategy with technology to solve real business problems. I recommend them to any business serious about future-proofing.",
      author: "Online Pharmacy Client"
    },
    {
      text: "Our enterprise had complex, outdated workflows, and they transformed everything with AI automation. Departments are now connected, and reporting happens in real time. It’s been a game-changer for productivity.",
      author: "SAAS Client"
    }
  ];

  return (
    <section id="clients_feedback" className="feedback-section">
      <div className="container feedback-container">
        
        {/* Section Pill Badge */}
        <div className="feedback-badge-wrapper animate-fade-in">
          <div className="feedback-badge">
            <span className="feedback-badge-dot"></span>
            Clients feedback
          </div>
        </div>

        {/* Section Title */}
        <div className="feedback-title-container animate-fade-in">
          <h2 className="feedback-section-title">
            Don't <span className="feedback-highlight">just take our words</span> for it!
          </h2>
        </div>

        {/* Conveyor/Marquee Testimonial slider */}
        <div className="feedback-marquee-container">
          <div className="feedback-marquee-track">
            {testimonials.map((item, idx) => (
              <div key={idx} className="feedback-card">
                <div className="feedback-stars">
                  <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-red.svg" alt="star" />
                  <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-red.svg" alt="star" />
                  <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-red.svg" alt="star" />
                  <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-red.svg" alt="star" />
                  <img src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-red.svg" alt="star" />
                </div>
                
                <p className="feedback-text">“{item.text}”</p>
                
                <div className="feedback-author-row">
                  <h6 className="feedback-author-name">{item.author}</h6>
                  <span className="feedback-author-tag">Verified Client</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
