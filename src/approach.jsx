const { useState: useStateAP, useEffect: useEffectAP, useRef: useRefAP } = React;

/* Slide 15 framing: engagements are engineered against three constraints
   simultaneously — Budget, Timeframe, Goal. Auto-scrolling vertical carousel
   cycles through each, surfacing the three aligned bullets. */
function Approach({ rotateSeconds = 8 }) {
  const [i, setI] = useStateAP(0);
  const [paused, setPaused] = useStateAP(false);
  const [progress, setProgress] = useStateAP(0);
  const startRef = useRefAP(Date.now());
  const rafRef = useRefAP(null);
  const n = APPROACH_PILLARS.length;

  useEffectAP(() => {
    startRef.current = Date.now();
    setProgress(0);
    if (paused) return;
    const tick = () => {
      const el = (Date.now() - startRef.current) / 1000;
      const p = Math.min(1, el / rotateSeconds);
      setProgress(p);
      if (p >= 1) setI((x) => (x + 1) % n);else
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [i, paused, rotateSeconds, n]);

  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="ap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Left: static "Adaptive by Design." + explainer + Budget/Timeframe/Goal progress */}
          <div className="ap__left">
            <div className="ap__static">
              <div className="eyebrow">Approach</div>
              <h2 className="ap__static-title">
                Adaptive <span className="accent" style={{ color: "rgb(200, 71, 43)" }}>by Design.</span>
              </h2>
              <p className="ap__static-lede">
                Every engagement is engineered against three simultaneous
                constraints: the <em>budget</em> you actually have, the
                <em> timeframe</em> the market will reward, and the
                <em> goal</em> that moves the operating metric. Nothing
                gets sacrificed — the approach is how.
              </p>
            </div>

            <div className="ap__progress">
              {APPROACH_PILLARS.map((p, idx) =>
              <button key={p.key}
              className={'ap__progress-item ' + (idx === i ? 'active' : '')}
              onClick={() => setI(idx)}>
                  <span className="ap__progress-label">{p.title}</span>
                  <span className="ap__progress-bar">
                    <span className="bar" style={{
                    width: idx === i ? progress * 100 + '%' : idx < i ? '100%' : '0%'
                  }} />
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right: current pillar content */}
          <div className="ap__stage">
            {APPROACH_PILLARS.map((p, idx) =>
            <div key={p.key} className={'ap__slide ' + (idx === i ? 'active' : '')}>
                <div className="ap__kicker">
                  <span className="ap__kicker-sep" />
                  <span>Constraint</span>
                </div>
                <h3 className="ap__title">{p.title}<span className="accent">.</span></h3>
                <p className="ap__sub">{p.sub}</p>

                <ul className="ap__list">
                  {p.items.map((it) =>
                <li key={it} className="ap__item">
                      <span className="ap__item-text">{it}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="approach__banner">
        <div className="approach__banner-inner">
          <div className="approach__banner-big">
            Achieve<br /><span className="approach__banner-bt">Breakthrough &raquo;</span><br />results.
          </div>
          <div className="approach__banner-body">
            Platform accelerations over bespoke builds. Direct stakeholder
            participation over committee-by-proxy. Creative IP arrangements
            over rigid retainers. Realistic AI deployment over vendor theater.
            That&rsquo;s the shape of an engagement that actually lands.
          </div>
        </div>
      </div>
    </section>);

}

window.Approach = Approach;