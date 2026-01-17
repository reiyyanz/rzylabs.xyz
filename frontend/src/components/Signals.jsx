import { Link } from "react-router-dom";

function Signals() {
  return (
    <section className="signals-section">
      <div className="signal-strip">
        <div className="signal-card">
          <div className="signal-content">
            <div>
              <div className="signal-label">rzylabs noir</div>
              <div className="subtext">ultra-dark clothing concept. stealth drop signals.</div>
            </div>
            <Link className="pill" to="/noir">coming soon</Link>
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
