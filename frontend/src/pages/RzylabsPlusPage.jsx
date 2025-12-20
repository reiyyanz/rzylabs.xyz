import Archive from "../components/Archive";
import data from "../data";

function RzylabsPlusPage() {
  return (
    <section>
      <div className="section-head">
        <div>
          <div className="section-title">rzylabs+ / archive</div>
          <div className="subtext">16:9 frames, grain-first, heavy emphasis on the full library</div>
        </div>
        <div className="pill">browse</div>
      </div>
      <Archive items={data.gallery} />
    </section>
  );
}

export default RzylabsPlusPage;
