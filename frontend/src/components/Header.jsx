import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.4;
    }
  }, []);

  return (
    <header>
      <div className="brand">
        <video
          ref={videoRef}
          src="/logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          width="104"
          height="60"
          aria-label="rzylabs logo"
          className="brand-video"
        />
        <span className="brand-chip">.net</span>
      </div>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/portfolio">portfolio</NavLink>
        <NavLink to="/rzylabs-plus">rzylabs+</NavLink>
        <NavLink
          to="/noir"
          className={({ isActive }) => `nav-noir-text sheen${isActive ? " active" : ""}`}
        >
          rzylabs noir
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
