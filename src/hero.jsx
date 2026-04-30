function TNTHero() {
  return (
    <section className="section hero" id="top">
      <div className="grid-bg"></div>
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__kicker">
            {TNT_SCOPE.map((s, i) =>
            <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                <span>{s}</span>
              </React.Fragment>
            )}
          </div>
          <h1 className="hero__title">
            One platform.<br />
            <span className="accent">Infinite</span>&nbsp;expansion.
          </h1>
          <p className="hero__sub">
            Evolve your CIT/ATM/FLM business any way <u>YOU</u> want<br />
            — A single platform engineered for cash logistics, not retrofitted into it.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--accent">
              Schedule a demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="#pillars" className="btn btn--ghost">See the platform</a>
          </div>
          <div className="hero__bullets">
            <div className="hero__bullet">
              <span className="label">Coverage</span>
              <span className="val">Vaulting · CIT · ATM · FLM/SLM · Contracting · Billing</span>
            </div>
            <div className="hero__bullet">
              <span className="label">Model</span>
              <span className="val">Co-Managed Platform-as-a-Service — your roadmap, our weekly delivery</span>
            </div>
            <div className="hero__bullet">
              <span className="label">Posture</span>
              <span className="val">Zero-Trust Controls · Workflow Enforcement / Compliance · Simplified / Automated Processes</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__ph hero__ph--web" aria-label="Web product placeholder">Web</div>
          <div className="hero__ph hero__ph--app" aria-label="App product placeholder">App</div>
        </div>
      </div>
    </section>);

}
window.TNTHero = TNTHero;