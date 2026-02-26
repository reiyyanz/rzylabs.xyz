import { Link } from "react-router-dom";

function Signals() {
  return (
    <section className="signals-section">
      <div className="signal-strip">
        <div className="signal-card">
          <div className="signal-content">
            <div>
            <div className="section-title nav-noir-text">Resonance Engine</div>
            <div className="subtext"><i>Seek your Alpha.</i> | Financal Computing + Intelligence</div>
            </div>
            <Link className="pill" to="/noir">Under Development</Link>
          </div>
        </div>
        <div className="signal-card">
          <div className="signal-content">
            <div>
              <div className="signal-label">rzylabs+</div>
              <div className="subtext">full photo archive. 16:9 frames, heavy grain.</div>
            </div>
            <Link className="pill" to="/rzylabs-plus">enter</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signals;
