import "./Team.css";

export default function Team({ title, subtitle }: { title?: string, subtitle?: string }) {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">{title || "Our Executive Team"}</h2>
          {subtitle && <p className="team-subtitle">{subtitle}</p>}
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar"></div>
            <h3>Myles Robinson</h3>
          </div>
          <div className="team-card">
            <div className="team-avatar"></div>
            <h3>Jamie Robinson</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
