import Analytics from "../components/Analytics";
import data from "../data";

function PortfolioPage() {
  return <Analytics kpis={data.kpis} equitySeries={data.equitySeries} trades={data.trades} />;
}

export default PortfolioPage;
