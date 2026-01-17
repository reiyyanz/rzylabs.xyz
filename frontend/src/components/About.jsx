function About() {
  return (
    <section id="about">
      <div className="section-head">
        <div className="section-title">about</div>
        <div className="pill">tech | finance | design</div>
      </div>
      <div className="about-grid">
        <div className="tile">
          <h3>profile</h3>
          <p className="subtext">
            Hey there, my name is Reiyyan Zafar. I am a fintech product manager with a BS in Computer Science and BBA in Finance, 
            from the University of Wisconsin Madison. 
            
          </p>
        </div>
        <div className="tile">
          <h3>tools</h3>
          <p className="subtext">python, react, figma, after effects, premiere, lightroom.</p>
          <p className="subtext">favorite lenses: 50mm; aspect 16:9; love analog grain.</p>
        </div>
        <div className="tile">
          <h3>advices to live by</h3>
          <p className="subtext">
            crafting dark, cutting edge, minimal experiences. integrating analytics with aesthetics. 
            i also dabble in clothing/content creation (rzylabs noir) for future product drops.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
