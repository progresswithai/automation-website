import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Integrations from "@/components/Integrations";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function AiSystemsPage() {
  const aiFaqs = [
    {
      question: "Do I need to know about how to code?",
      answer: "No, we take care of everything for you, it's a hands-off approach so you can focus on what you're good at."
    },
    {
      question: "Do I get a say in what you will automate?",
      answer: "Yes, in the discovery call we find out how your business works and how we can best implement AI. You then decide how you wish for us to proceed, with our advice."
    },
    {
      question: "Will AI automation replace my sales team?",
      answer: "No — AI doesn’t replace people, it supports them by handling repetitive tasks like lead scoring, follow-ups, and scheduling. This frees up sales reps to focus on building relationships and closing deals."
    },
    {
      question: "How does AI actually help generate more sales?",
      answer: "AI improves sales by: Personalizing outreach at scale (emails, messages, ads) Responding instantly to leads (chatbots, automations) Analyzing sales data to highlight the best opportunities Automating follow-ups so no prospect slips through the cracks."
    },
    {
      question: "Is AI automation expensive?",
      answer: "Not necessarily. Many tools are subscription-based and scalable, meaning you pay only for what you need. In most cases, automation pays for itself by saving time, reducing human error, and increasing conversions."
    },
    {
      question: "Can AI integrate with my existing CRM and tools?",
      answer: "Yes — AI automations work with most popular CRMs and platforms like HubSpot, Salesforce, Zoho, Pipedrive, or even simple tools like Google Sheets, Slack, and email. Integration is often seamless through APIs or automation platforms (Zapier, Make, n8n)."
    },
    {
      question: "How quickly can I see results with AI automation?",
      answer: "It depends on the process. Some automations (like chatbots or follow-up sequences) can deliver results within days, while larger systems (like full funnel automation or advanced analytics) may take a few weeks. Most businesses notice efficiency gains almost immediately."
    }
  ];

  const aiTestimonials = [
    {
      text: "\"Working with this AI automation agency completely transformed our sales process. Within three months, our conversions skyrocketed, and we saw a 10x increase in revenue. The automated follow-ups and lead scoring meant no opportunity was missed. It felt like having an extra sales team working around the clock.\"",
      author: "Mike Gemini"
    },
    {
      text: "\"Our customer service went from overwhelmed to outstanding thanks to their AI automation. Chatbots now handle common questions instantly, freeing our team to focus on complex cases. Response times dropped dramatically, and customer satisfaction scores improved. It feels like we’re delivering enterprise-level support with half the effort.\"",
      author: "Seb Fontaine"
    },
    {
      text: "\"Before automation, we needed a big team to manage leads, reports, and support tasks. After this agency streamlined everything with AI, we reduced staffing needs by 40% without losing performance. Productivity actually increased, costs dropped, and we finally have a scalable system that runs smoothly without constant micromanagement.\"",
      author: "Matt Adams"
    }
  ];

  return (
    <main>
      <Header />
      <Integrations />
      <FAQ 
        customFaqs={aiFaqs} 
        customTitle="Frequently asked questions"
        customSubtitle="Answers to common questions about our AI systems and implementations."
      />
      <Testimonials 
        customTestimonials={aiTestimonials}
        customTitle={<h2 className="testimonials-title">What clients said:</h2>}
      />
      <Pricing />
      <Footer />
    </main>
  );
}
