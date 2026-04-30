function TNTIntegrations() {
  return (
    <section className="section section--ink" id="integrations">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Integrations</div>
          <h2 className="section-head__title">
            Expansive integration <span className="accent">capabilities.</span>
          </h2>
          <p className="section-head__lede">Currency platforms, banks, sorters, scanners, enterprise systems 
— connected through an adaptive I/O framework. We work on-demand, too.
          </p>
        </div>
        <div className="integrations reveal">
          {TNT_INTEGRATIONS.map((g, i) =>
          <div key={g.name} className="integration">
              <div className="integration__head">
                <div className="integration__name">{g.name}</div>
              </div>
              <ul>
                {g.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}
window.TNTIntegrations = TNTIntegrations;

function TNTProcess() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Process</div>
          <h2 className="section-head__title">
            Direct platform <span className="accent">management.</span>
          </h2>
          <p className="section-head__lede">
            You help drive and direct weekly platform updates.<br />The roadmap is yours. The execution is ours. The platform compounds.
          </p>
        </div>
        <div className="process reveal">
          <div className="process__copy">
            <h3>Your operation, configured against the platform — not a <span className="accent">template.</span></h3>
            <p>
              From kickoff to first production cutover in a typical 90-day target window. After go-live, we keep shipping — your priorities, our weekly cadence.
            </p>
            <ul className="process__steps">
              {TNT_PROCESS_STEPS.map((s, i) =>
              <li key={s.t} className="process__step">
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="t">{s.t}</span>
                    <span className="s">{s.s}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="process__viz">
            <img src="uploads/screenshot-route-control.png" alt="Route Control"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', borderRadius: '4px', border: '1px solid var(--line)' }} />
          </div>
        </div>
      </div>
    </section>);

}
window.TNTProcess = TNTProcess;

function TNTStatsStrip() {
  return (
    <section style={{ padding: 0, background: 'var(--ink)' }}>
      <div className="stats-strip">
        {TNT_STATS.map((s) =>
        <div key={s.lbl} className="stat">
            <div className="stat__num">{s.num}<span className="unit">{s.unit}</span></div>
            <div className="stat__lbl">{s.lbl}</div>
            <div className="stat__desc">{s.desc}</div>
          </div>
        )}
      </div>
    </section>);

}
window.TNTStatsStrip = TNTStatsStrip;