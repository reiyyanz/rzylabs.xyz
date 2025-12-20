function Archive({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <div className="tile" key={item.id}>
          <div className="media" aria-hidden="true"></div>
          <h3>{item.title}</h3>
          <div className="meta">
            {item.year} · {item.tags.join(" / ")}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Archive;
