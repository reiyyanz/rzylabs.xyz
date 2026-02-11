import { Link } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 3) return "It's Quite Late";
  if (hour < 6) return "It's Quite Early";
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function Hero() {
  const greeting = getGreeting();

  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero-media">
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <div className="pill accent"> Welcome to rzylabs</div>
            <h1>{greeting}, Visitor</h1>
            <p>
              rzylabs is built as a dark, minimal lab for visuals, analytics, and experiments;
              this is a vision you can trust the more you interact with.
            </p>
          </div>
        </div>
        <div className="hero-column">
          <div className="tile">
            <div className="badge">meet your creator</div>
            <h3>tech + finance + visuals</h3>
            <p className="subtext">
              hey there, my name is reiyyan. i am a fintech product manager with a cs and finance background. i like experimenting with tech, analytics, and design systems
              that tell a story. if you couldn't tell i like to keep things dark, clean, and grainy. 
              <br></br>
              <br></br> [page currently under construction...]
            </p>
            <div className="cta" style={{ marginTop: "16px" }}>
              <Link className="primary" to="/rzylabs-plus">view archive</Link>
              <Link to="/portfolio">view portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
