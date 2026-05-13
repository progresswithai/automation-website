import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background glow and grids */}
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>
      
      {/* Main hero text/info area */}
      <div className="container hero-content animate-fade-in">
        {/* Badge */}
        <div className="hero-badge">
          <span className="dot"></span>
          DONE FOR YOU AI SETUP
        </div>
        
        {/* Title */}
        <h1 className="hero-title">
          <span className="title-text-white">Done-for-you AI</span>
          <span className="title-highlight-wrapper">
            <span className="title-highlight">Plan. Build. Deploy.</span>
          </span>
          <span className="title-text-white">In just 90 Days</span>
        </h1>
        
        {/* Subtitle */}
        <h3 className="hero-subtitle">
          AI fully integrated into business within 90 days.
        </h3>
        
        {/* Actions */}
        <div className="hero-actions">
          <Link href="/contact-us" className="button button-primary hero-btn">
            Book a Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="hero-guarantee">Money back guarantee*</div>
        </div>

        {/* Floating Avatar & Cursor 1 (Bottom Left of Hero text) */}
        <div className="floating-user left-user">
          <div className="avatar-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
              alt="Team member Myles" 
              className="user-avatar"
            />
          </div>
          <img 
            src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/user-cursor-3.png" 
            alt="Myles cursor" 
            className="user-cursor"
          />
        </div>

        {/* Floating Avatar & Cursor 2 (Right of Hero text) */}
        <div className="floating-user right-user">
          <div className="avatar-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Team member Sarah" 
              className="user-avatar"
            />
          </div>
          <img 
            src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/user-cursor-1.png" 
            alt="Sarah cursor" 
            className="user-cursor"
          />
        </div>
      </div>

      {/* Main Showcase Dashboard Container */}
      <div className="container dashboard-container animate-fade-in delay-200">
        <div className="dashboard-wrapper">
          {/* Main Screenshot */}
          <img 
            src="https://theaiautomationagency.ai/wp-content/uploads/2025/10/Screenshot-2025-10-28-at-13.03.06.png" 
            alt="AI Automation Agency Platform" 
            className="dashboard-main-img"
          />

          {/* Floating Helper Widget overlay (Right-side) */}
          <img 
            src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/app-dashboard-helper-1.webp" 
            alt="AI Configuration Tool" 
            className="dashboard-helper-img"
          />

          {/* Overlaid collaborative avatar with cursor pointing to communication style card */}
          <div className="dashboard-overlay-user overlay-style-card">
            <div className="avatar-wrapper small">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" 
                alt="AI Editor Emma" 
                className="user-avatar"
              />
            </div>
            <img 
              src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/user-cursor-2.png" 
              alt="Emma cursor" 
              className="user-cursor"
            />
          </div>

          {/* Overlaid collaborative avatar with cursor pointing to the chat feedback field */}
          <div className="dashboard-overlay-user overlay-chat-field">
            <div className="avatar-wrapper small">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" 
                alt="AI Dev David" 
                className="user-avatar"
              />
            </div>
            <img 
              src="https://theaiautomationagency.ai/wp-content/uploads/2024/11/user-cursor-4.png" 
              alt="David cursor" 
              className="user-cursor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

