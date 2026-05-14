import "./Team.css";
import Link from "next/link";

interface TeamProps {
  title?: string;
  subtitle?: string;
}

export default function Team({ title, subtitle }: TeamProps) {
  const members = [
    {
      name: "Pranay Pise",
      role: "Founder & Strategist",
      image: "/assets/images/founder.png",
      linkedin: "https://www.linkedin.com/in/pranaypise/",
      facebook: "#",
      x: "#"
    },
    {
      name: "Jamie Robinson",
      role: "Strategist",
      image: "https://theaiautomationagency.ai/wp-content/uploads/2025/10/Jamie-Robinson-2.png",
      linkedin: "#",
      facebook: "#",
      x: "#"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container team-container">
        
        {/* Section Pill Badge */}
        <div className="team-badge-wrapper animate-fade-in">
          <div className="team-badge">
            <span className="team-badge-dot"></span>
            Dedicated Team
          </div>
        </div>

        {/* Section Header */}
        <div className="team-header animate-fade-in">
          <h2 className="team-section-title">
            {title ? title : (
              <>
                The <span className="team-highlight">Expert team</span> By Your Side
              </>
            )}
          </h2>
          <p className="team-section-subtitle">
            {subtitle || "Our philosophy is simple — Give our clients access to the best current automation systems in each industry."}
          </p>
        </div>

        {/* Members Grid */}
        <div className="team-grid">
          {members.map((member, idx) => (
            <div key={idx} className="member-card animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              
              {/* Profile Image Circular */}
              <div className="member-img-box">
                <img src={member.image} alt={member.name} className="member-img" />
              </div>

              {/* Bio Details */}
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <span className="member-role">{member.role}</span>
              </div>

              {/* Social Channels Row */}
              <div className="member-socials">
                
                {/* LinkedIn */}
                <Link href={member.linkedin} className="social-link" aria-label={`${member.name} LinkedIn`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </Link>

                {/* Facebook */}
                <Link href={member.facebook} className="social-link" aria-label={`${member.name} Facebook`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </Link>

                {/* X (formerly Twitter) */}
                <Link href={member.x} className="social-link" aria-label={`${member.name} X Twitter`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
