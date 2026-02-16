import { useState } from "react";

function NoirPage() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [promptMessage, setPromptMessage] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    setPromptMessage("access coming soon");
  };

  return (
    <>
      <section className="noir-page">
        <div className="section-head">
          <div>
            <div className="section-title">rzylabs noir</div>
            <div className="subtext" style={{ fontStyle: 'italic' }}>for those who don't ____ __ __ ____.</div>
          </div>
          <div className="pill accent">Under Construction</div>
        </div>
        <div className="about-grid">
          <div className="tile">
            <h3>design</h3>
            <p className="subtext">
              noir keeps the palette muted, dark, and minimal by design.
            </p>
          </div>
          <div className="tile">
            <h3>intent</h3>
            <p className="subtext">
            [REDACTED]
            </p>
          </div>
          <div className="tile">
            <h3>teasers</h3>
            <p className="subtext">
              none... at the moment, check back later. <br></br>
              Or not it's really up to you. 
            </p>
          </div>
        </div>
      </section>

      <section className="noir-placeholder">
        <div className="section-head">
          <div className="section-title">concepts</div>
          <div className="pill">renders coming soon</div>
        </div>
        <div className="about-grid">
          <div className="tile concepts-gif" aria-label="concepts preview">
            <video src="/concepts-preview.mp4" autoPlay loop muted playsInline preload="metadata" />
          </div>
        </div>
    </section>

      <section className="noir-placeholder">
        <div className="section-head">
          <div className="section-title">RROW Series1</div>
          <div className="pill">Login - Members only</div>
        </div>
        <div className="about-grid">
          <div className="tile noir-row noir-lock" aria-label="vault locked">
            <video src="/vaultofglass.mp4" autoPlay loop muted playsInline preload="metadata" className="noir-vault-gif" />
            <button
              type="button"
              className="lock-icon lock-button"
              aria-label="Unlock vault"
              onClick={() => {
                setShowPrompt((prev) => !prev);
                setPromptMessage("");
              }}
            >
              🔒
            </button>
            {showPrompt && (
              <form className="vault-prompt" onSubmit={handleUnlock}>
                <input
                  className="input"
                  type="password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="vault password"
                />
                <button className="pill" type="submit">enter</button>
                {promptMessage && <span className="subtext">{promptMessage}</span>}
              </form>
            )}
          </div>
          <div className="subtext" >*Member access to RROW Series1</div>
        </div>
      </section>
    </>
  );
}

export default NoirPage;
