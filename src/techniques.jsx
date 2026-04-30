/* Techniques — slide 2.
   Framed as "Implementations-as-a-Service": 10 market-moving techniques.
   Visual: ink background, large numbered cells with hover reveal, similar
   vocabulary to capabilities but on dark ground to contrast. */

function Techniques() {
  return (
    <section className="section section--ink" id="techniques">
      <div className="grid-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="eyebrow">Techniques</div>
            <h2 className="section-head__title" style={{ maxWidth: 'none', whiteSpace: 'nowrap' }}>
              Implementations-as-a-<span className="accent">Service</span>.
            </h2>
            <p className="section-head__lede" style={{ marginTop: 20, maxWidth: 'none', fontSize: 15, lineHeight: 1.5 }}>Blended strategy, execution, and technical services aimed at needle-moving market outcomes. 


Ten techniques we deploy to expand markets, evolve services, and capture share.
            </p>
          </div>
        </div>

        <div className="tech-grid">
          {TECHNIQUES.map((c, idx) =>
          <div key={c.t} className="tech-cell">
              <div className="tech-cell__num">
                Technique
              </div>
              <div className="tech-cell__body">
                <div className="tech-cell__title">{c.t}</div>
                <div className="tech-cell__sub">{c.s}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Techniques = Techniques;