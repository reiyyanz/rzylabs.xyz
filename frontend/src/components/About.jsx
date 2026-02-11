function About() {
  return (
    <section id="about">
      <div className="section-head">
        <div className="section-title">about</div>
        <div className="pill">tech | finance | design</div>
      </div>
      <div className="about-grid">
        <div className="about-column">
          <div className="tile">
            <h3>bios</h3>
            <p className="subtext">
              Hey there, my name is Reiyyan (ray-on) Zafar. I am a fintech product analyst and the head chef of <i>rzylabs.net</i>
            </p>
          </div>
          <div className="tile">
            <h3>tools</h3>
            <p className="subtext">python, react.js, figma, jira, confluence, after effects, premiere, lightroom.</p>
            <p className="subtext">favorite lens: 50mm; aspect 16:9; i love analog grain.</p>
          </div>
          <div className="tile">
            <h3>geographics</h3>
            <p className="subtext">wisconsin born and raised; <br></br>
            currently running between madison + milwuakee, wi and chicago, il</p>
          </div>
          <div className="tile">
            <h3>education</h3>
            <p className="subtext">University of Wisconsin-Madison (2022-2026): <br></br>B.S. Computer Science 
            <br></br>B.B.A. Finance, Investment, and Banking</p>
          </div>
          <div className="tile">
            <h3>hobbies/likes</h3>
            <p className="subtext">mountains, cars, videography, & portfolio management</p>
          </div>
        </div>
        <div className="tile">
          <h3>3D Render</h3>
          <div className="about-photo-frame">
            <img src="/profile.PNG" alt="Reiyyan portrait" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
