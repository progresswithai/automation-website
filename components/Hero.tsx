import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="glow glow-1"></div>
      </div>
      <div className="container hero-content animate-fade-in">
        <div className="hero-badge">
          <span className="dot"></span>
          DONE FOR YOU AI SETUP
        </div>
        
        <h1 className="hero-title">
          <span className="title-line title-white">Done-for-you AI</span>
          <span className="title-line title-highlight-wrapper">
            <span className="title-highlight">Plan. Build. Deploy.</span>
          </span>
          <span className="title-line title-white">In just 90 Days</span>
        </h1>
        
      </div>
    </section>
  );
}
