import EquityChart from "./EquityChart";
import TradesTable from "./TradesTable";

function Analytics({ kpis, equitySeries, trades }) {
  return (
    <section id="analytics">
      <div className="section-head">
        <div>
          <div className="section-title">portfolio / analytics - Our trades win.</div>
          <div className="subtext">some synthetic finance KPIs and trading signals, that reflect our actual portfolio with some privacy buffers</div>
          <div className="subtext">Coming soon* crypto trades</div>
        </div>
        <div className="pill accent">as of Jan. 2026</div>
      </div>
      <div className="kpi-grid">
        {kpis.map((kpi, idx) => (
          <div className="kpi" key={idx}>
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-note">{kpi.note}</div>
          </div>
        ))}
      </div>
      <EquityChart series={equitySeries} />
      <TradesTable trades={trades} />
    </section>
  );
}

export default Analytics;
