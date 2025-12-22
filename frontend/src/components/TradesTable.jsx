function TradesTable({ trades }) {
  return (
    <div className="tile" style={{ marginTop: "16px" }}>
      <div className="badge" style={{ marginBottom: "10px" }}>rrow series1 - partial portfolio holdings (Adjusted + Lagged)</div>
      <table>
        <thead>
          <tr>
            <th>ticker</th>
            <th>name</th>
            <th>weight</th>
            <th>cost basis</th>
            <th>p/l</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((holding, idx) => (
            <tr key={idx}>
              <td>{holding.ticker}</td>
              <td>{holding.name}</td>
              <td>{holding.weight}</td>
              <td>{holding.cost}</td>
              <td>{holding.returnPct}</td>
              <td>{holding.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradesTable;
