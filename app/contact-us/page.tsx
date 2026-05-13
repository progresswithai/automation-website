import "./contact.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      <section className="contact-page">
        <div className="container contact-container">
          
          <div className="contact-info">
            <h1 className="contact-title">Contact us</h1>
            <p className="contact-desc">
              Call <a href="tel:03330510634">0333 051 0634</a> or Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.
            </p>
            <p className="contact-desc">
              Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            <p className="contact-desc">
              Or drop us a message via <a href="mailto:sales@theaiautomationagency.ai">email</a>.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method-card">
                <div className="method-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:03330510634">0333 051 0634</a>
                </div>
              </div>
              <div className="contact-method-card">
                <div className="method-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sales@theaiautomationagency.ai">sales@theaiautomationagency.ai</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="0333 051 0634" />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea id="message" rows={5} placeholder="Tell us about your automation needs..." required></textarea>
              </div>
              <button type="submit" className="button button-primary submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
