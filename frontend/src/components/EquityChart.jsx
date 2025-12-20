import { useMemo } from "react";

function EquityChart({ series }) {
  const { points, min, max } = useMemo(() => {
    const values = series.map((p) => p.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const xStep = 100 / (series.length - 1 || 1);
    const pts = series
      .map((p, i) => {
        const x = i * xStep;
        const y = 100 - ((p.value - minVal) / (maxVal - minVal || 1)) * 100;
        return `${x},${y}`;
      })
      .join(" ");
    return { points: pts, min: minVal, max: maxVal };
  }, [series]);

  return (
    <div className="chart">
      <div className="badge" style={{ marginBottom: "10px" }}>equity curve (synthetic)</div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-start)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-end)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="url(#chart-fill)"
          stroke="none"
          points={`0,100 ${points} 100,100`}
        />
        <polyline
          fill="none"
          stroke="url(#chart-fill)"
          strokeWidth="1.5"
          points={points}
        />
      </svg>
      <div className="meta">range: {min.toFixed(1)} → {max.toFixed(1)}</div>
    </div>
  );
}

export default EquityChart;
