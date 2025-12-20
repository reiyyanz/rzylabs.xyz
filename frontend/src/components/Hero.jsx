import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero-media">
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <div className="pill accent">signal: rzylabs</div>
            <h1>grainy future-facing visuals & fintech intuition</h1>
            <p>
              reiyyan zafar blends computer science, product, and markets with cinematic photography and videography.
              building rzylabs as a dark, minimal lab for visuals, analytics, and experimental drops.
            </p>
          </div>
        </div>
        <div className="tile">
          <div className="badge">profile</div>
          <h3>product x markets x camera</h3>
          <p className="subtext">
            fintech product manager with cs+finance roots. experimenting with storytelling, signals, and design systems
            that feel like instruments.
          </p>
          <div className="cta" style={{ marginTop: "16px" }}>
            <Link className="primary" to="/rzylabs-plus">view archive</Link>
            <Link to="/portfolio">see analytics</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
