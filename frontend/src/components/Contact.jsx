import { useState } from "react";

function Contact() {
  const [showInput, setShowInput] = useState(false);

  return (
    <section id="contact">
      <div className="section-head">
        <div className="section-title">contact / get signals</div>
        <div className="pill accent"> updates </div>
      </div>
      <div className="tile">
        <h3>stay in the lab</h3>
        <p className="subtext">
          upcoming: rzylabs noir drops, new archive sets, finance dashboards with secure data. opt-in for release signals.
        </p>
        <div className="cta">
          {showInput ? (
            <>
              <input
                type="email"
                className="input"
                placeholder="enter your email"
                aria-label="email"
              />
              <button className="primary">submit</button>
            </>
          ) : (
            <button className="primary" onClick={() => setShowInput(true)}>
              join the list
            </button>
          )}
          <button>email</button>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/reiyyanz/" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">📸</span>
            <span className="social-text">instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/reiyyanzafar/" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">💼</span>
            <span className="social-text">linkedin</span>
          </a>
          <a href="https://www.youtube.com/@rzylabs" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">▶️</span>
            <span className="social-text">youtube</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
