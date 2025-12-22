function Timeline() {
  const items = [
    { year: "2004", text: "early life" },
    { year: "2019", text: "call to action; got my hands on a camera" },
    { year: "2022", text: "rzylabs+ created" },
    { year: "2023", text: "rzylabs noir concepts; finance analytics drops" },
    { year: "2025", text: "rzylabs portfolio returns green" },
    { year: "2026", text: "at'se" }
  ];

  return (
    <section id="timeline">
      <div className="section-head">
        <div className="section-title">timeline</div>
        <div className="pill">signal milestones</div>
      </div>
      <div className="about-grid timeline-row">
        <div className="tile timeline-tile">
          <div className="timeline-horizontal">
            <div className="timeline-track" aria-hidden="true" />
            {items.map((item) => (
              <div className="timeline-point" key={item.year}>
                <div className="dot" />
                <div className="timeline-label">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
