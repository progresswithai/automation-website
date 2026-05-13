"use client";

import { useState } from "react";
import "./FAQ.css";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does The AI Automation Agency offer?",
      answer: "We provide expert advisory services to help you identify the best automation opportunities, recommend the right AI tools and systems, and assist your team or vendors through the implementation process. We don’t directly implement systems ourselves but guide you at every step to ensure successful adoption."
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer: "No technical expertise is required on your part. We simplify the complex automation landscape, providing clear recommendations and support so your team can confidently deploy and manage automation systems."
    },
    {
      question: "Which types of businesses benefit most from your advisory?",
      answer: "Our advisory is ideal for SMEs to mid-sized businesses across industries looking to improve sales efficiency, customer experience, and operational workflows through AI-driven automation, particularly businesses that want strategic guidance on selecting and integrating systems."
    },
    {
      question: "Can you guarantee automation will increase my revenue or productivity?",
      answer: "While results depend on various factors, we base our recommendations on proven strategies used by clients like Boiler Central and Value Doors, who have grown their revenues significantly with automation. We focus on measurable ROI and continuous optimisation."
    },
    {
      question: "What kinds of processes can be automated?",
      answer: "We help you automate lead generation, customer communication, sales follow-ups, data entry, reporting, scheduling, and other administrative or repetitive tasks — freeing your team to focus on higher-value activities."
    },
    {
      question: "Will automation replace my employees?",
      answer: "No, automation is designed to augment and empower your team by handling repetitive tasks and enabling them to work more strategically and creatively."
    },
    {
      question: "How do you help with selecting automation software or vendors?",
      answer: "We use a comprehensive vendor evaluation checklist considering functionality, ease of use, integration potential, scalability, security, and cost-effectiveness to recommend the right platforms tailored to your needs."
    },
    {
      question: "What does your advisory roadmap look like?",
      answer: "Our phased advisory approach starts with a thorough assessment, followed by strategic tool recommendations, integration guidance, and ongoing measurement and optimisation to ensure your automation scales effectively and delivers ongoing value."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        
        {/* Left Column (Sticky) */}
        <div className="faq-left-col">
          <div className="faq-sticky-wrapper">
            
            {/* Section Pill Badge */}
            <div className="faq-badge-wrapper animate-fade-in">
              <div className="faq-badge">
                <span className="faq-badge-dot"></span>
                FAQs
              </div>
            </div>

            {/* Title & Description */}
            <h2 className="faq-title animate-fade-in">Frequently Asked Questions</h2>
            <p className="faq-subtitle animate-fade-in">
              These FAQs are based on the real, pressing questions our clients asked and our answers to for complete clarity!
            </p>

            {/* CTA Button */}
            <div className="faq-cta-wrapper animate-fade-in">
              <Link href="/contact-us" className="faq-btn">
                Still have a question?
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-btn-arrow">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>

        {/* Right Column (Accordion List) */}
        <div className="faq-right-col animate-fade-in">
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-panel-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-panel-trigger" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-arrow-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer-container" style={{ maxHeight: isOpen ? '250px' : '0' }}>
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
