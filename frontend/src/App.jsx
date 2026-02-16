import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const RzylabsPlusPage = lazy(() => import("./pages/RzylabsPlusPage"));
const NoirPage = lazy(() => import("./pages/NoirPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main>
          <Suspense fallback={<div className="tile" style={{ minHeight: "50vh" }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rzylabs-plus" element={<RzylabsPlusPage />} />
              <Route path="/noir" element={<NoirPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
