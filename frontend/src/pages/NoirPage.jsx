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
            <div className="section-title nav-noir-text">Resonance Engine (Preview)</div>
            <div className="subtext" style={{ fontStyle: 'italic' }}> Seek your Alpha.</div>
          </div>
          <div className="pill nav-noir-text">Under Construction</div>
        </div>
        <div className="about-grid">
          <div className="tile">
            <h3>design</h3>
            <p className="subtext">
              Resonance Engine is a financial computing engine with built in Market Intelligence, designed to power a suite of financial products and tools. 
            </p>
          </div>
          <div className="tile">
            <h3>intent</h3>
            <p className="subtext">
            We help you make financial decisons based on our resonance engine's insights, so you can seek your alpha.
            </p>
          </div>
          <div className="tile">
            <h3>teasers</h3>
            <p className="subtext">
              None... at the moment, check back later. <br></br>
              Or not it's really up to you. 
            </p>
          </div>
        </div>
      </section>

      <section className="noir-placeholder">
        <div className="section-head">
          <div className="section-title">Analytics</div>
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
          <div className="section-title nav-noir-text">Resonance Engine Series1</div>
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
                <button className="pill nav-noir-text" type="submit">enter</button>
                {promptMessage && <span className="subtext">{promptMessage}</span>}
              </form>
            )}
          </div>
          <div className="subtext" ><i>*Member access to RE Series1</i></div>
        </div>
      </section>
    </>
  );
}

export default NoirPage;
