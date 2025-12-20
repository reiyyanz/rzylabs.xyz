function About() {
  return (
    <section id="about">
      <div className="section-head">
        <div className="section-title">about / method</div>
        <div className="pill">product | markets | cinema</div>
      </div>
      <div className="about-grid">
        <div className="tile">
          <h3>profile</h3>
          <p className="subtext">
            reiyyan zafar — fintech product manager with computer science and finance roots.
            builds tools that feel cinematic; trades with a disciplined bias; captures frames that feel like signals.
          </p>
        </div>
        <div className="tile">
          <h3>tools</h3>
          <p className="subtext">python, react, figma, after effects, premiere, lightroom.</p>
          <p className="subtext">favorite lenses: 35mm, 50mm; aspect 16:9; love for analog grain.</p>
        </div>
        <div className="tile">
          <h3>focus</h3>
          <p className="subtext">
            crafting dark, minimal experiences. integrating analytics with aesthetics. preparing for rzylabs noir (clothing) and future product drops.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
