"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./ai-systems.css";

// Portait imports/references for Testimonial assets
const portraitImages = [
  "https://theaiautomationagency.ai/wp-content/uploads/2024/07/testimonial01.webp",
  "https://theaiautomationagency.ai/wp-content/uploads/2024/07/testimonial02.webp",
  "https://theaiautomationagency.ai/wp-content/uploads/2024/07/testimonial03.webp"
];

const testimonials = [
  {
    text: '"Working with this AI automation agency completely transformed our sales process. Within three months, our conversions skyrocketed, and we saw a 10x increase in revenue. The automated follow-ups and lead scoring meant no opportunity was missed. It felt like having an extra sales team working around the clock."',
    author: "Mike Gemini",
    title: "Marketing Director"
  },
  {
    text: '"Our customer service went from overwhelmed to outstanding thanks to their AI automation. Chatbots now handle common questions instantly, freeing our team to focus on complex cases. Response times dropped dramatically, and customer satisfaction scores improved. It feels like we’re delivering enterprise-level support with half the effort."',
    author: "Seb Fontaine",
    title: "Client Success Manager"
  },
  {
    text: '"Before automation, we needed a big team to manage leads, reports, and support tasks. After this agency streamlined everything with AI, we reduced staffing needs by 40% without losing performance. Productivity actually increased, costs dropped, and we finally have a scalable system that runs smoothly without constant micromanagement."',
    author: "Matt Adams",
    title: "Sales Director"
  }
];

const integrations = [
  { name: "Slack", tag: "Productivity", desc: "Notify your teammates of the latest activities with instant Slack messages.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-slack.svg" },
  { name: "Salesforce", tag: "CRM", desc: "Sync leads and customer data automatically across your entire sales pipeline.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-salesforce.svg" },
  { name: "Stripe", tag: "Payment", desc: "Handle subscriptions and transactions with automated payment workflows.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-stripe.svg" },
  { name: "PayPal", tag: "Payment", desc: "Provide a world-class checkout experience for your global customers.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-paypal.svg" },
  { name: "HubSpot", tag: "CRM", desc: "Expand the ROI from your CRM and unlock easy lead generation capabilities.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-hubspot.svg" },
  { name: "Zapier", tag: "Integration platforms", desc: "Create custom, automated workflows using thousands of your favorite apps.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-zapier.svg" },
  { name: "Slack", tag: "Productivity", desc: "Enable real-time team collaboration with automated channel updates.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-slack.svg" },
  { name: "Salesforce", tag: "CRM", desc: "Automate complex sales processes and reporting dashboards.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-salesforce.svg" },
  { name: "Stripe", tag: "Payment", desc: "Streamline recurring billing and invoice management.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-stripe.svg" },
  { name: "PayPal", tag: "Payment", desc: "Securely process international payments with automated fraud checks.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-paypal.svg" },
  { name: "HubSpot", tag: "CRM", desc: "Scale your marketing efforts with automated email sequences.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-hubspot.svg" },
  { name: "Zapier", tag: "Integration platforms", desc: "Connect your entire tech stack with powerful multi-step Zaps.", icon: "https://theaiautomationagency.ai/wp-content/uploads/2024/07/tool-zapier.svg" }
];

const faqs = [
  { question: "Do I need to know about how to code?", answer: "No, we take care of everything for you, it's a hands-off approach so you can focus on what you're good at." },
  { question: "Do I get a say in what you will automate?", answer: "Yes, in the discovery call we find out how your business works and how we can best implement AI. You then decide how you wish for us to proceed, with our advice." },
  { question: "Will AI automation replace my sales team?", answer: "No — AI doesn’t replace people, it supports them by handling repetitive tasks like lead scoring, follow-ups, and scheduling. This frees up sales reps to focus on building relationships and closing deals." },
  { question: "How does AI actually help generate more sales?", answer: "AI improves sales by: Personalizing outreach at scale (emails, messages, ads), Responding instantly to leads (chatbots, automations), Analyzing sales data to highlight the best opportunities, and Automating follow-ups so no prospect slips through the cracks." },
  { question: "Is AI automation expensive?", answer: "Not necessarily. Many tools are subscription-based and scalable, meaning you pay only for what you need. In most cases, automation pays for itself by saving time, reducing human error, and increasing conversions." },
  { question: "Can AI integrate with my existing CRM and tools?", answer: "Yes — AI automations work with most popular CRMs and platforms like HubSpot, Salesforce, Zoho, Pipedrive, or even simple tools like Google Sheets, Slack, and email. Integration is often seamless through APIs or automation platforms (Zapier, Make, n8n)." },
  { question: "How quickly can I see results with AI automation?", answer: "It depends on the process. Some automations (like chatbots or follow-up sequences) can deliver results within days, while larger systems (like full funnel automation or advanced analytics) may take a few weeks. Most businesses notice efficiency gains almost immediately." }
];

export default function AiSystemsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="ai-systems-layout">
        
        {/* SECTION 1: INTEGRATIONS */}
        <section className="integrations-section">
          
          {/* Decorative absolute stars */}
          <div className="star-container star-left">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary opacity-50">
              <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="star-container star-right">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary opacity-40">
              <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" fill="currentColor" />
            </svg>
          </div>

          <div className="section-heading-wrapper">
            <h1 className="section-main-title">Integrations</h1>
            <p className="section-subtitle">
              Boost your efficiency with integrations that will simplify your workflow.
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((item, index) => (
              <div key={index} className="integration-card">
                <div className="integration-card-top">
                  <div className="integration-meta">
                    <h5 className="integration-name">{item.name}</h5>
                    <span className="integration-tag">{item.tag}</span>
                  </div>
                  <div className="integration-icon-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt={item.name} className="integration-icon-img" />
                  </div>
                </div>
                <p className="integration-desc">{item.desc}</p>
                <Link href="#" className="integration-explore-link">
                  <span>Explore</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
        <section className="faq-section">
          <div className="container faq-container">
            <div className="section-heading-wrapper">
              <h2 className="section-main-title">Frequently asked questions:</h2>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={`faq-accordion-item ${isOpen ? "open" : ""}`}>
                    <button className="faq-trigger-btn" onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="faq-chevron">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div className="faq-content-pane" style={{ maxHeight: isOpen ? "200px" : "0" }}>
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: TESTIMONIALS */}
        <section className="testimonials-section">
          <div className="section-heading-wrapper">
            <h2 className="section-main-title">What clients said:</h2>
          </div>

          <div className="testimonials-card-container">
            {/* Left Portrait Image with Crossfade */}
            <div className="testimonial-left-portal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={portraitImages[activeTestimonialIndex]} 
                alt="Client Portrait" 
                className="testimonial-frame-img" 
              />
            </div>

            {/* Right Testimonial Statement */}
            <div className="testimonial-right-content">
              <div className="testimonial-quotes-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="testimonial-active-quote">
                {testimonials[activeTestimonialIndex].text}
              </p>
              <div className="testimonial-author-meta">
                <h6 className="testimonial-author-name">{testimonials[activeTestimonialIndex].author}</h6>
                <span className="testimonial-author-title">{testimonials[activeTestimonialIndex].title}</span>
              </div>

              {/* Bullet Nav Buttons */}
              <div className="testimonial-bullets-track">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`testimonial-bullet ${activeTestimonialIndex === index ? "active" : ""}`}
                    onClick={() => setActiveTestimonialIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GAIN VALUABLE INSIGHTS */}
        <section className="insights-banner-section">
          <div className="insights-card-inner">
            <h2 className="insights-banner-title">Gain valuable insights</h2>
            <Link href="/advice" className="insights-arrow-btn">
              <span>View more articles</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>

        {/* SECTION 5: PRICING */}
        <section id="pricing" className="pricing-section">
          <div className="container">
            
            <div className="section-heading-wrapper">
              <div className="section-label">
                <span className="section-label-dot"></span>
                <span>Pricing</span>
              </div>
              <h2 className="section-main-title">
                Simple <span>flexible</span> pricing.
              </h2>
              <p className="section-subtitle">
                Work short-term or long-term. Your choice.
              </p>
            </div>

            <div className="pricing-grid">
              
              {/* Card 1: Fast track */}
              <div className="pricing-tier-card">
                <div className="pricing-card-header">
                  <h5 className="pricing-title">90 day fast-track</h5>
                  <div className="pricing-cost-row">
                    <h3 className="pricing-cost-figure">£call</h3>
                    <span className="pricing-cost-period">/ 3 mo</span>
                  </div>
                  <p className="pricing-tier-desc">
                    Done-for-you in <b>90 days</b> with ongoing support available
                  </p>
                  <Link href="/contact-us" className="pricing-tier-btn">
                    Book a Call &gt;
                  </Link>
                  <p className="pricing-tier-caption">Money back guarantee*</p>
                </div>
                
                <div className="pricing-checklist-container">
                  <ul className="pricing-checklist-list">
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>90 days done-for-you</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Weekly progress calls</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Full AI end-to-end journey</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Bespoke for your business</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Quick wins in month 1</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>ROI guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Retainer */}
              <div className="pricing-tier-card popular">
                <span className="popular-badge-ribbon">Most popular</span>
                <div className="pricing-card-header">
                  <h5 className="pricing-title">Retainer</h5>
                  <div className="pricing-cost-row">
                    <h3 className="pricing-cost-figure">£call</h3>
                    <span className="pricing-cost-period">/ mo</span>
                  </div>
                  <p className="pricing-tier-desc">
                    Ongoing <b>monthly management</b> with the latest updates
                  </p>
                  <Link href="/contact-us" className="pricing-tier-btn">
                    Book a Call &gt;
                  </Link>
                  <p className="pricing-tier-caption">Hands off for you. Hands on for us</p>
                </div>
                
                <div className="pricing-checklist-container">
                  <ul className="pricing-checklist-list">
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Expert AI systems long term</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Weekly progress calls</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Full AI end-to-end journey</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Bespoke for your business</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Grows with your business</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Massive ROI long term</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Support */}
              <div className="pricing-tier-card">
                <div className="pricing-card-header">
                  <h5 className="pricing-title">Support</h5>
                  <div className="pricing-cost-row">
                    <h3 className="pricing-cost-figure">£87</h3>
                    <span className="pricing-cost-period">/ week</span>
                  </div>
                  <p className="pricing-tier-desc">
                    Get experts <b>on hand daily</b> for AI support
                  </p>
                  <Link href="/contact-us" className="pricing-tier-btn">
                    Get started
                  </Link>
                  <p className="pricing-tier-caption">Billed monthly</p>
                </div>
                
                <div className="pricing-checklist-container">
                  <ul className="pricing-checklist-list">
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Access to AI experts daily</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Help for one brand/company</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Fast response times</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>On hand to help</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Pick our brains</span>
                    </li>
                    <li className="pricing-checklist-item">
                      <div className="pricing-check-icon-wrapper">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Help with integration</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <p className="pricing-disclaimer">Prices exclude any applicable taxes.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
