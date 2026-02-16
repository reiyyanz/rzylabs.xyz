import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";
import Signals from "../components/Signals";
import Contact from "../components/Contact";
import EquityChart from "../components/EquityChart";
import data from "../data";

function HomePage() {
  const { builds } = data;
  const [activeBuild, setActiveBuild] = useState(0);
  const onNext = () => setActiveBuild((prev) => (prev + 1) % builds.length);
  const onPrev = () => setActiveBuild((prev) => (prev - 1 + builds.length) % builds.length);

  return (
    <>
      <Hero />
      <section>
        <div className="section-head">
          <div className="section-title">lab at a glance</div>
          <div className="pill accent">new</div>
        </div>
        <div className="about-grid">
          <div className="tile tile-wide">
            <div className="carousel">
              <div className="carousel-slide">
                <div className="carousel-head">
                  <h3>{builds[activeBuild].title}</h3>
                  <Link className="pill" to={builds[activeBuild].href}>{builds[activeBuild].cta}</Link>
                </div>
                <p className="subtext">{builds[activeBuild].description}</p>
                {builds[activeBuild].mediaType === "video" && builds[activeBuild].mediaSrc && (
                  <video
                    className="carousel-media"
                    src={builds[activeBuild].mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
                {builds[activeBuild].mediaType === "image" && builds[activeBuild].mediaSrc && (
                  <img
                    className="carousel-media"
                    src={builds[activeBuild].mediaSrc}
                    alt={builds[activeBuild].title}
                    loading="lazy"
                  />
                )}
                {builds[activeBuild].mediaType === "chart" && (
                  <>
                    <div className="carousel-kpis">
                      <div className="kpi-grid">
                        {data.kpis
                          .filter((kpi) => kpi.label.toLowerCase() !== "max drawdown")
                          .map((kpi, idx) => (
                          <div className="kpi" key={idx}>
                            <div className="kpi-label">{kpi.label}</div>
                            <div className="kpi-value">{kpi.value}</div>
                            <div className="kpi-note">{kpi.note}</div>
                          </div>
                          ))}
                      </div>
                    </div>
                    <div className="carousel-chart">
                      <EquityChart series={data.equitySeries} />
                    </div>
                  </>
                )}
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={onPrev} aria-label="Previous build">‹</button>
                <div className="carousel-dots" role="tablist">
                  {builds.map((_, idx) => (
                    <button
                      key={idx}
                      className={`dot ${idx === activeBuild ? "active" : ""}`}
                      onClick={() => setActiveBuild(idx)}
                      aria-label={`Show build ${idx + 1}`}
                      aria-pressed={idx === activeBuild}
                    />
                  ))}
                </div>
                <button className="carousel-btn" onClick={onNext} aria-label="Next build">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Signals />
      <Contact />
    </>
  );
}

export default HomePage;
