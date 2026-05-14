import "./contact.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-container relative">
          
          {/* Decorative Stars */}
          <div className="contact-star contact-star-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-1.svg" loading="lazy" alt="Star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-white-1.svg" loading="lazy" alt="Star Dark" />
          </div>
          <div className="contact-star contact-star-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="block dark:hidden" src="https://theaiautomationagency.ai/wp-content/uploads/2024/07/star-2.svg" loading="lazy" alt="Star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" className="hidden dark:block" src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/star-white-2.svg" loading="lazy" alt="Star Dark" />
          </div>

          <h1 className="contact-title">Contact us</h1>
          <p className="contact-subtitle">
            Call +91 70570 45814 or Feel free to reach out to us at Nal Stop, Pune Maharashtra. Our dedicated team will respond to your inquiries promptly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-card">
            
            <p className="form-intro">
              Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            
            <form className="contact-form">
              <div className="form-group form-group-name">
                <label>Name <span className="text-red-500">*</span></label>
                <div className="name-inputs">
                  <div className="name-input-wrapper">
                    <input type="text" id="first-name" required />
                    <label htmlFor="first-name" className="sublabel">First</label>
                  </div>
                  <div className="name-input-wrapper">
                    <input type="text" id="last-name" required />
                    <label htmlFor="last-name" className="sublabel">Last</label>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Comment or Message</label>
                <textarea id="message" rows={5}></textarea>
              </div>

              <button type="submit" className="button button-primary submit-btn">Submit</button>
            </form>

            <p className="form-outro">
              Or drop us a message via <a href="mailto:progresswithai@gmail.com" className="form-link">email</a>.
            </p>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
