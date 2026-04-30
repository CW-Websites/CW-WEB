function Capabilities() {
  return (
    <section className="section section--paper2" id="capabilities">
      <div className="container">
        <div className="section-head">
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="eyebrow">Capabilities</div>
            <h2 className="section-head__title" style={{ maxWidth: 'none', whiteSpace: 'nowrap' }}>
              Optimizations-as-a-<span className="accent">Service</span>.
            </h2>
            <p className="section-head__lede" style={{ marginTop: 20, maxWidth: 'none', fontSize: 15, lineHeight: 1.5 }}>
              Capabilities we employ in the solutions we engineer.
              

              <br />
              Hover any cell for the plain-English read.
            </p>
          </div>
        </div>

        <div className="cap-grid">
          {CAPABILITIES.map((c, idx) =>
          <button key={c.t} className="cap-cell">
              <span className="cap-cell__num">
                Capability
              </span>
              <div>
                <div className="cap-cell__title">{c.t}</div>
                <div className="cap-cell__sub">{c.s}</div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}

window.Capabilities = Capabilities;