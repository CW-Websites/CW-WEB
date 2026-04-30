const { useState: useStateBT, useEffect: useEffectBT, useRef: useRefBT } = React;

function DemoFormModal({ open, onClose, product }) {
  const [form, setForm] = useStateBT({ name: '', email: '', time: '' });
  const [sent, setSent] = useStateBT(false);

  useEffectBT(() => {
    if (!open) { setSent(false); setForm({ name: '', email: '', time: '' }); }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo request — ${product || 'CoorWorks'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRequested time: ${form.time}\n\nProduct: ${product}`
    );
    window.location.href = `mailto:sales@coorworks.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="demo-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="demo-modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="demo-modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="demo-modal__kicker">Schedule a Demo</div>
        <h3 className="demo-modal__title">{product || 'CoorWorks'}</h3>
        <p className="demo-modal__sub">Tell us when works and we'll reach out to confirm.</p>
        <form onSubmit={handleSubmit} className="demo-modal__form">
          <label>
            <span>Name</span>
            <input type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            <span>Requested time</span>
            <input type="text" required placeholder="e.g. Next Tuesday afternoon ET"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })} />
          </label>
          <button className="btn btn--primary" type="submit">Send request</button>
          {sent && <div className="demo-modal__sent">Opening your email client…</div>}
        </form>
      </div>
    </div>
  );
}

function Breakthroughs({ rotateSeconds = 8 }) {
  const [i, setI] = useStateBT(0);
  const [paused, setPaused] = useStateBT(false);
  const [progress, setProgress] = useStateBT(0); // 0..1 within current slide
  const [demoOpen, setDemoOpen] = useStateBT(false);
  const startRef = useRefBT(Date.now());
  const rafRef = useRefBT(null);

  const n = BREAKTHROUGHS.length;

  // Auto-advance + progress
  useEffectBT(() => {
    startRef.current = Date.now();
    setProgress(0);
    if (paused) return;

    const tick = () => {
      const elapsed = (Date.now() - startRef.current) / 1000;
      const p = Math.min(1, elapsed / rotateSeconds);
      setProgress(p);
      if (p >= 1) {
        setI((prev) => (prev + 1) % n);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [i, paused, rotateSeconds, n]);

  const go = (k) => setI((k % n + n) % n);

  return (
    <section className="bt section--ink" id="deliverables"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
      <div className="grid-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="bt__head">
          <div className="bt__head-left">
            <div className="eyebrow">Deliverables</div>
            <h2 className="bt__head-title">
              Breakthroughs <span className="accent">Delivered</span>.
            </h2>
            <p className="section-head__lede" style={{ marginTop: 18 }}>Example solutions that illustrate the point...


            </p>
          </div>
          <div className="bt__tabs" role="tablist">
            {BREAKTHROUGHS.map((b, idx) =>
            <button
              key={b.id}
              role="tab"
              aria-selected={idx === i}
              className={'bt__tab ' + (idx === i ? 'active' : '')}
              onClick={() => go(idx)}>
              
                {b.category.replace(' Optimization', '')}
              </button>
            )}
          </div>
        </div>

        <div className="bt__stage">
          {/* Visual — pre-composed hero image per case */}
          <div className="bt__visual">
            {BREAKTHROUGHS.map((b, idx) =>
            <div key={b.id}
            className={'bt__visual-inner ' + (idx === i ? 'active' : '')}
            aria-hidden={idx !== i}>
                <div className="bt__visual-head">
                  <div className="bt__visual-logo-group">
                    {b.site ? (
                      <a href={b.site} target="_blank" rel="noopener" className="bt__visual-logo-link">
                        <div className="bt__visual-logo">
                          <img src={b.logo} alt={b.sub} />
                        </div>
                      </a>
                    ) : (
                      <div className="bt__visual-logo">
                        <img src={b.logo} alt={b.sub} />
                      </div>
                    )}
                    {b.site && (
                      <a href={b.site} target="_blank" rel="noopener" className="btn btn--cw bt__visit-btn">
                        Visit Site
                      </a>
                    )}
                  </div>
                  <div className="bt__vol-tag">
                    <span className="big">{b.volume}</span>
                    <span>{b.volumeLabel}</span>
                  </div>
                </div>
                <div className="bt__hero-img-wrap">
                  <img className="bt__hero-img" src={b.image} alt={b.title} />
                </div>
              </div>
            )}
          </div>

          {/* Panel — Challenge / Target / Outcome */}
          <div className="bt__panel">
            <div className="bt__panel-inner">
              {BREAKTHROUGHS.map((b, idx) =>
              <div key={b.id} className={'bt__slide ' + (idx === i ? 'active' : '')}>
                  <div className="bt__kicker">
                    <span>{b.category}</span>
                    <span className="sep">·</span>
                    <span>{b.sub}</span>
                  </div>

                  <h3 className="bt__title">{b.title}</h3>
                  <div className="bt__subtitle">{b.subtitle}</div>

                  <div className="bt__cto">
                    <div className="bt__cto-row">
                      <div className="bt__cto-label">Challenge</div>
                      <div className="bt__cto-body">{b.challenge}</div>
                    </div>
                    <div className="bt__cto-row">
                      <div className="bt__cto-label">Target</div>
                      <div className="bt__cto-body">{b.target}</div>
                    </div>
                    <div className="bt__cto-row">
                      <div className="bt__cto-label">Outcome</div>
                      <div className="bt__cto-body">{b.outcome}</div>
                    </div>
                  </div>

                  {(b.demoForm || b.appStore || b.playStore) && (
                    <div className="bt__panel-cta">
                      {b.demoForm && (
                        b.demoUrl ? (
                          <a className="btn btn--cw" href={b.demoUrl} target="_blank" rel="noopener">
                            Schedule Demo
                          </a>
                        ) : (
                          <button className="btn btn--cw" onClick={() => setDemoOpen(true)}>
                            Schedule Demo
                          </button>
                        )
                      )}
                      <div className="bt__panel-cta-stores">
                        {b.appStore && (
                          <a href={b.appStore} target="_blank" rel="noopener" className="store-badge" aria-label="Available on iTunes">
                            <img src="assets/badge-itunes.png" alt="Available on iTunes" />
                          </a>
                        )}
                        {b.playStore && (
                          <a href={b.playStore} target="_blank" rel="noopener" className="store-badge" aria-label="Android app on Google Play">
                            <img src="assets/badge-google-play.png" alt="Android app on Google Play" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bt__progress">
              {BREAKTHROUGHS.map((b, idx) =>
              <div key={b.id}
              className={'bt__progress-item ' + (idx < i ? 'done' : '')}
              onClick={() => go(idx)}>
                  <div className="bar" style={{
                  width: idx === i ? progress * 100 + '%' : idx < i ? '100%' : '0%'
                }} />
                </div>
              )}
            </div>

            <div className="bt__progress-nav" style={{ marginTop: 16 }}>
              <button className="bt__progress-btn" onClick={() => go(i - 1)} aria-label="Previous">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button className="bt__progress-btn" onClick={() => go(i + 1)} aria-label="Next">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bt__progress-btn" onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Resume' : 'Pause'}
              style={{ marginLeft: 8 }}>
                {paused ?
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg> :

                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <rect x="6" y="5" width="4" height="14" />
                    <rect x="14" y="5" width="4" height="14" />
                  </svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
      <DemoFormModal open={demoOpen} onClose={() => setDemoOpen(false)} product={BREAKTHROUGHS[i] ? BREAKTHROUGHS[i].title : ''} />
    </section>);

}

function StatsStrip() {
  return (
    <section className="section" style={{ padding: '40px 0 0' }}>
      <div className="container">
        <div className="stats">
          {STATS.map((s, i) =>
          <div key={i} className="stat">
              <div className="stat__label">{s.label}</div>
              <div className="stat__num">{s.num}<span className="unit">{s.unit}</span></div>
              <div className="stat__desc">{s.desc}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Breakthroughs = Breakthroughs;
window.StatsStrip = StatsStrip;