function TNTPillars() {
  return (
    <section className="section section--paper2" id="pillars">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Capability Foundations</div>
          <h2 className="section-head__title">
            The pillars of operational <span className="accent">consistency</span>, <span className="green">efficiency</span>, and <span className="orange">automation</span>.
          </h2>
          <p className="section-head__lede">Fifteen functional foundations — one platform. 
Every capability built for cash logistics from the ground up.
          </p>
        </div>
        <div className="pillar-grid reveal">
          {TNT_PILLARS.map((p) =>
          <div key={p.name} className="pillar">
              <div className="pillar__head">
                <div className="pillar__name">{p.name}</div>
              </div>
              <ul className="pillar__items">
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}
window.TNTPillars = TNTPillars;

function TNTBenefits() {
  return (
    <section className="section section--ink" id="benefits">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Main Benefit Targets</div>
          <h2 className="section-head__title">
            Next foundations to <span className="accent">optimize</span> your operation.
          </h2>
          <p className="section-head__lede">The shortlist we drive against in every implementation 
— the foundations that compound margin, velocity, and operational trust at scale.
          </p>
        </div>
        <div className="benefits-grid reveal">
          {TNT_BENEFITS.map((b) =>
          <div key={b} className="benefit">
              <div className="benefit__check"></div>
              <div className="benefit__text">{b}</div>
            </div>
          )}
        </div>
        <div className="benefits-foot reveal">
          <span className="val">&gt; <span className="accent">90&nbsp;day</span> implementation targets</span>
        </div>
      </div>
    </section>);

}
window.TNTBenefits = TNTBenefits;