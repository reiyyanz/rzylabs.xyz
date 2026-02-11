import { useState } from "react";
import Archive from "../components/Archive";
import data from "../data";

function RzylabsPlusPage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      <section>
        <div className="section-head">
          <div>
            <div className="section-title">rzylabs+ / archive</div>
            <div className="subtext">16:9 frames, 300 blk out grain. [Images coming soon]</div>
          </div>
          <div className="pill">browse</div>
        </div>
        <Archive items={data.gallery} />
      </section>

      <section>
        <div className="section-head">
          <div>
            <div className="section-title">rzylabs+ / notes</div>
            <div className="subtext">context, thoughts, and stories</div>
          </div>
          <div className="pill">posts</div>
        </div>
        <div className="about-grid">
          <div className="tile">
            <div className="accordion-head">
              <h3>The Gardener and The Winnower</h3>
              <button
                type="button"
                className="accordion-toggle"
                onClick={() => setShowStory((prev) => !prev)}
                aria-expanded={showStory}
                aria-label={showStory ? "Hide story" : "Show story"}
              >
                {showStory ? "▲" : "▼"}
              </button>
            </div>
            {showStory && (
              <p className="subtext">
                <em>
                  "Once upon a time,* a gardener and a winnower lived** together in a garden.***<br />
                  <br />
                  * It was once before a time, because time had not yet begun.<br />
                  ** We did not live. We existed as principles of ontological dynamics that emerged from mathematical structures, as bodiless and inevitable as the primes.<br />
                  *** It was the field of possibility that prefigured existence.<br />
                  <br />
                  They existed, because they had to exist. They had no antecedent and no constituents, and there is no instrument of causality by which they could be portioned into components and assigned to some schematic of their origin. If you followed the umbilical of history in search of some ultimate atavistic embryo that became them, you would end your journey marooned here in this garden.<br />
                  <br />
                  In the morning, the gardener pushed seeds down into the wet loam of the garden to see what they would become.<br />
                  <br />
                  In the evening, the winnower reaped the day’s crop and separated what would flourish from what had failed.<br />
                  <br />
                  The day was longer than all of time, and the night was swifter than a glint of light on a falling sugar crystal. Insects buzzed between the flowers, and worms slithered between the roots, feeding on what was and what might be, the first gradient in existence, the first dynamo of life. Rain fell from no sky. Voices spoke without mouth or meaning. A tree of silver wings bloomed yielded fruit shed feathers bloomed again.<br />
                  <br />
                  In the day between the morning and the evening, the gardener and the winnower played a game of possibilities."<br />
                  <br />
                  -Book: Unveiling<br />
                  <br />
                  *Brought to you by The Ishtar Sink Collective; in collaboration with rzylabs +
                </em>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default RzylabsPlusPage;
