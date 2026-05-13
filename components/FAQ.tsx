"use client";

import { useState } from "react";
import "./FAQ.css";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does The AI Automation Agency offer?",
      answer: "We provide expert advisory services to help you identify the best automation opportunities, recommend the right AI tools and systems, and assist your team or vendors through the implementation process. We don't directly implement systems ourselves but guide you at every step to ensure successful adoption."
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
      answer: "While results depend on various factors, we base our recommendations on proven strategies used by our clients, who have grown their revenues significantly with automation. We focus on measurable ROI and continuous optimisation."
    },
    {
      question: "What kinds of processes can be automated?",
      answer: "We help you automate lead generation, customer communication, sales follow-ups, data entry, reporting, scheduling, and other administrative or repetitive tasks — freeing your team to focus on higher-value activities."
    },
    {
      question: "Will automation replace my employees?",
      answer: "No, automation is designed to augment and empower your team by handling repetitive tasks and enabling them to work more strategically and creatively."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="advice" className="faq-section">
      <div className="container faq-container">
        <div className="faq-header animate-fade-in">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">These FAQs are based on the real, pressing questions our clients asked and our answers to for complete clarity!</p>
          <Link href="#contact" className="faq-link">Still have a question?</Link>
        </div>
        
        <div className="faq-list animate-fade-in delay-100">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === index ? '300px' : '0' }}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
