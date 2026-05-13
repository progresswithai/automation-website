import "./Integrations.css";

export default function Integrations() {
  const integrations = [
    { name: "Slack", description: "Notify your teammates of the latest activities with instant Slack messages.", icon: "📱" },
    { name: "Salesforce", description: "Notify your teammates of the latest activities with instant Slack messages.", icon: "☁️" },
    { name: "Stripe", description: "Notify your teammates of the latest activities with instant Slack messages.", icon: "💳" },
    { name: "PayPal", description: "Provide a world-class checkout experience for your customers.", icon: "💸" },
    { name: "HubSpot", description: "Expand the ROI from your CRM and unlock easy generation and capabilities.", icon: "🎯" },
    { name: "Zapier", description: "Create custom, automated workflows using your favorite Zaps.", icon: "⚙️" }
  ];

  return (
    <section className="integrations-section">
      <div className="container">
        <div className="integrations-header">
          <div className="integrations-badge">INTEGRATIONS</div>
          <h2>Boost your efficiency with integrations that will simplify your workflow.</h2>
        </div>
        <div className="integrations-grid">
          {integrations.map((item, index) => (
            <div key={index} className="integration-card">
              <div className="integration-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a href="#" className="integration-link">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
