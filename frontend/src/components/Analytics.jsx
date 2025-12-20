import EquityChart from "./EquityChart";
import TradesTable from "./TradesTable";

function Analytics({ kpis, equitySeries, trades }) {
  return (
    <section id="analytics">
      <div className="section-head">
        <div>
          <div className="section-title">portfolio / analytics</div>
          <div className="subtext">synthetic finance KPIs, trading signals, and product metrics — secure data hookup soon</div>
        </div>
        <div className="pill accent">secure data hookup soon</div>
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
