import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";
import Signals from "../components/Signals";
import Contact from "../components/Contact";

function HomePage() {
  const builds = [
    {
      title: "recent build",
      description: "latest coding project: Scott's Stocks — a full stack paper trading platform with custom charts, auth, and a fast UI.",
      cta: "view build",
      href: "/portfolio",
      mediaType: "video",
      mediaSrc: "/Scott's Stocks Demo.mov"
    },
    {
      title: "photo drop",
      description: "rzylabs theme/backdrop; where it all started.",
      cta: "view archive",
      href: "/rzylabs-plus",
      mediaType: "image",
      mediaSrc: "/photo-drop.png"
    },
    {
      title: "analytics suite",
      description: "synthetic trading analytics with equity curves, trade logs, and metrics.",
      cta: "see analytics",
      href: "/portfolio"
    }
  ];

  const [activeBuild, setActiveBuild] = useState(0);
  const onNext = () => setActiveBuild((prev) => (prev + 1) % builds.length);
  const onPrev = () => setActiveBuild((prev) => (prev - 1 + builds.length) % builds.length);

  return (
    <>
      <Hero />
      <section>
        <div className="section-head">
          <div className="section-title">inside the lab</div>
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
