function NoirPage() {
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
            designed for those who prefer to keep a low profile while still making a statement. 
            </p>
          </div>
          <div className="tile">
            <h3>teasers</h3>
            <p className="subtext">
              none... or check back later, it's really up to you. 
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
            <img src="/concepts-preview.gif" alt="rzylabs noir concepts in motion" />
          </div>
        </div>
      </section>

      <section className="noir-placeholder">
        <div className="section-head">
          <div className="section-title">Vault of Glass</div>
          <div className="pill">locked</div>
        </div>
        <div className="about-grid">
          <div className="tile noir-row noir-lock" aria-label="vault locked">
            <img src="/vaultofglass.gif" alt="vault preview" className="noir-vault-gif" />
            <span className="lock-icon" aria-hidden="true">🔒</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoirPage;
