function Timeline() {
  const items = [
    { year: "2004", text: "birth + early life" },
    { year: "2019", text: "call to action; got my hands on a camera" },
    { year: "2022", text: "rzylabs+ created" },
    { year: "2023", text: "rzylabs noir concepts; finance analytics drops" },
    { year: "2025", text: "rzylabs portfolio returns green" },
    { year: "2026", text: "at'se" }
  ];

  const startYear = 2002;
  const endYear = 2030;
  const span = endYear - startYear || 1;
  const positionForYear = (year) => ((Number(year) - startYear) / span) * 100;

  const anchorStartYear = 2015;
  const anchorEndYear = 2026;

  const anchorItems = items
    .filter((item) => Number(item.year) >= anchorStartYear)
    .sort((a, b) => Number(a.year) - Number(b.year));
  const anchorStartPos = positionForYear(anchorStartYear);
  const anchorEndPos = positionForYear(anchorEndYear);
  const spacingFactor = 1.15;
  const rawSpan = anchorEndPos - anchorStartPos;
  const maxSpan = Math.max(rawSpan, 100 - anchorStartPos);
  const scaledSpan = Math.min(rawSpan * spacingFactor, maxSpan);
  const anchorStep =
    anchorItems.length > 1 ? scaledSpan / (anchorItems.length - 1) : 0;

  const getPosition = (year) => {
    const yearNum = Number(year);
    const anchorIndex = anchorItems.findIndex((anchor) => anchor.year === String(year));
    if (yearNum < anchorStartYear || anchorIndex < 0) {
      return positionForYear(yearNum);
    }
    return anchorStartPos + anchorStep * anchorIndex;
  };

  return (
    <section id="timeline">
      <div className="section-head">
        <div className="section-title">timeline</div>
        <div className="pill">signal milestones</div>
      </div>
      <div className="about-grid timeline-row">
        <div className="tile timeline-tile">
          <div className="timeline-scroll">
            <div className="timeline-horizontal">
              <div className="timeline-track" aria-hidden="true" />
              <div className="timeline-dots" aria-hidden="true">
                {items.map((item) => (
                  <span
                    className="dot"
                    key={`dot-${item.year}`}
                    style={{ left: `${getPosition(item.year)}%` }}
                  />
                ))}
              </div>
              <div className="timeline-labels">
                {items.map((item, idx) => (
                  <div
                    className="timeline-label timeline-label-card"
                    key={`label-${item.year}-${idx}`}
                    style={{ left: `${getPosition(item.year)}%` }}
                  >
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
