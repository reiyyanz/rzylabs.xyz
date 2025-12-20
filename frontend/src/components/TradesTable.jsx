function TradesTable({ trades }) {
  return (
    <div className="tile" style={{ marginTop: "16px" }}>
      <div className="badge" style={{ marginBottom: "10px" }}>latest experiments / trades</div>
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>move</th>
            <th>pnl</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, idx) => (
            <tr key={idx}>
              <td>{trade.date}</td>
              <td>{trade.title}</td>
              <td>{trade.pnl}</td>
              <td>{trade.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradesTable;
