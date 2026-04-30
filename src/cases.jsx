function TNTCases() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Deployment Cases</div>
          <h2 className="section-head__title">
            Four example deployments<br /><span className="accent">One Platform.</span>
          </h2>
          <p className="section-head__lede">
            Every CIT/ATM/FLM operation has its own pressure points.<br />The platform configures against the model — these are the four we deploy most often.
          </p>
        </div>
        <div className="cases reveal">
          {TNT_CASES.map((c) =>
          <div key={c.n} className="case">
              <div className="case__head">
                <div className="case__model">{c.model}</div>
                <div className="case__arrow" aria-hidden="true">
                  <img src="uploads/arrow-outbound.png" alt="" />
                </div>
                <div className="case__target">{c.target}</div>
              </div>
              <div className="case__body">
                <div className="case__id">
                  <div className="case__pull">{c.pull}</div>
                  <div className="case__scope">
                    {c.scope.map((s) =>
                  <div key={s.k + s.v} className="row"><span className="k">{s.k}</span><span className="v">{s.v}</span></div>
                  )}
                  </div>
                </div>
                <div className="case__col">
                  <h4>Functional Foundations</h4>
                  <ul>{c.foundations.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
                <div className="case__col">
                  <h4>Platform Targets</h4>
                  <ul>{c.targets.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
window.TNTCases = TNTCases;

function TNTLoop() {
  return (
    <section className="section section--paper2" id="customers">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Customer Integration</div>
          <h2 className="section-head__title">
            Win them once.<br />Service them <span className="accent">forever.</span>
          </h2>
          <p className="section-head__lede">
            Strengthen loyalty and maximize efficiency with deep, two-way customer participation<br />— every touchpoint operationalized inside the platform.
          </p>
        </div>
        <div className="loop reveal">
          <div className="loop__list" style={{ gridColumn: '1 / -1' }}>
            {TNT_LOOP_ITEMS.map((it) =>
            <div key={it.l1 + it.l2} className="loop__item">
                <span className="loop__item-label">
                  <span className="loop__item-l1">{it.l1}</span>
                  <span className="loop__item-l2">{it.l2}</span>
                </span>
                <span className="loop__item-q">{it.q}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
window.TNTLoop = TNTLoop;