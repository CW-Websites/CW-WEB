function HeroChart() {
  const W = 1600,H = 620;
  const padL = 72,padR = 72,padT = 50,padB = 70;

  // Monthly X-axis (Jan → Dec). 12 stops, 0..11 mapped across width.
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const N = months.length;

  // Values are 0..1 where 0 = top of chart, 1 = bottom.
  // Costs: squiggly, high early, tapering down with late-year wobble.
  const costVals = [0.22, 0.28, 0.25, 0.32, 0.30, 0.42, 0.48, 0.55, 0.62, 0.70, 0.80, 0.88];
  // Revenue: squiggly, low early, ramping up with waves that overtake costs mid-year.
  const revVals = [0.82, 0.78, 0.72, 0.68, 0.58, 0.50, 0.42, 0.32, 0.22, 0.14, 0.10, 0.06];

  const toXY = (i, v) => [
  padL + i / (N - 1) * (W - padL - padR),
  padT + v * (H - padT - padB)];


  // Catmull–Rom to Bezier for a smooth, flowing wave.
  const smoothPath = (vals) => {
    const P = vals.map((v, i) => toXY(i, v));
    let d = `M ${P[0][0]} ${P[0][1]}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i];
      const p1 = P[i];
      const p2 = P[i + 1];
      const p3 = P[i + 2] || p2;
      const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
      const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
      const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
      const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
    }
    return d;
  };

  const costPath = smoothPath(costVals);
  const revPath = smoothPath(revVals);

  // Areas:
  // Revenue area fills DOWN to baseline (toward bottom). Green below the line = revenue "gained".
  const revArea = `${revPath} L ${W - padR} ${H - padB} L ${padL} ${H - padB} Z`;
  // Costs area fills UP to top. Red above the line = cost "burden" shrinking over time.
  const costArea = `${costPath} L ${W - padR} ${padT} L ${padL} ${padT} Z`;

  const yTicks = [0, 25, 50, 75, 100]; // labels, top → bottom-inverted
  // y position for a given percent (0=bottom, 100=top of chart area)
  const yAt = (pct) => padT + (1 - pct / 100) * (H - padT - padB);

  const costHead = toXY(N - 1, costVals[N - 1]);
  const revHead = toXY(N - 1, revVals[N - 1]);

  return (
    <svg className="hero-chart"
    viewBox={`0 0 ${W} ${H}`}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true">
      <defs>
        <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F8A4C" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#1F8A4C" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="costFill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C8472B" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#C8472B" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Horizontal gridlines */}
      {yTicks.map((t) =>
      <line key={'g' + t}
      x1={padL} y1={yAt(t)}
      x2={W - padR} y2={yAt(t)}
      stroke="rgba(11,30,63,0.08)" strokeWidth="1" />
      )}

      {/* Y-axis labels (left) */}
      {yTicks.slice().reverse().map((t) =>
      <text key={'yl' + t}
      x={padL - 14}
      y={yAt(t)}
      textAnchor="end"
      dominantBaseline="middle"
      fontFamily="IBM Plex Mono, monospace"
      fontSize="14"
      fontWeight="500"
      fill="rgba(11,30,63,0.38)">{t}</text>
      )}

      {/* Filled areas */}
      <path d={costArea} fill="url(#costFill)" />
      <path d={revArea} fill="url(#revFill)" />

      {/* Lines on top */}
      <path d={costPath} fill="none" stroke="#C8472B" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round" />
      <path d={revPath} fill="none" stroke="#1F8A4C" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round" />

      {/* End-point emphasis */}
      <circle cx={costHead[0]} cy={costHead[1]} r="5.5" fill="#C8472B" />
      <circle cx={costHead[0]} cy={costHead[1]} r="12" fill="none"
      stroke="#C8472B" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx={revHead[0]} cy={revHead[1]} r="5.5" fill="#1F8A4C" />
      <circle cx={revHead[0]} cy={revHead[1]} r="12" fill="none"
      stroke="#1F8A4C" strokeOpacity="0.3" strokeWidth="1.5" />

      {/* X-axis month labels */}
      {months.map((m, i) =>
      <text key={'xl' + m}
      x={toXY(i, 0)[0]}
      y={H - padB + 28}
      textAnchor="middle"
      fontFamily="IBM Plex Mono, monospace"
      fontSize="14"
      fontWeight="500"
      fill="rgba(11,30,63,0.45)">{m}</text>
      )}

      {/* Series legends — inline labels on the right end */}
      <g>
        <text x={costHead[0] - 14} y={costHead[1] - 14}
        textAnchor="end"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="13"
        fontWeight="600"
        fill="#C8472B">
          Costs ↓
        </text>
        <text x={revHead[0] - 14} y={revHead[1] + 22}
        textAnchor="end"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="13"
        fontWeight="600"
        fill="#1F8A4C">
          Revenue ↑
        </text>
      </g>
    </svg>);

}

function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero__inner">
        <h1 className="hero__title">
          Revenue &amp; Margin<br /><span className="hero__highlight">Optimizations</span>
        </h1>

        <p className="hero__sub">Platform Accelerated Solutions to Scale Margin and Maximize Revenue Growth

        </p>

        <div className="hero__chart-wrap">
          <div className="hero__scope-row">
            {SCOPE_ITEMS.map((s, i) =>
            <React.Fragment key={s}>
                {i > 0 && <span className="hero__scope-sep">|</span>}
                <span className="hero__scope-item">{s}</span>
              </React.Fragment>
            )}
          </div>

          <HeroChart />

          <div className="hero__deliverables" aria-label="Sample deliverables — jump to a specific case in Breakthroughs Delivered">
            <img src="assets/deliverables-bar.png" alt="Sample Deliverables: Track/Trace, OTC Anywhere, Coordinate" />
            <a href="#deliverables-tnt"    className="hero__deliverables-hot" style={{left: '21%',  width: '22%'}} aria-label="Jump to Track/Trace breakthrough">
              <span>Track/Trace</span>
            </a>
            <a href="#deliverables-otc"    className="hero__deliverables-hot" style={{left: '46%',  width: '20%'}} aria-label="Jump to OTC Anywhere breakthrough">
              <span>OTC Anywhere</span>
            </a>
            <a href="#deliverables-change" className="hero__deliverables-hot" style={{left: '70%',  width: '26%'}} aria-label="Jump to Coordinate breakthrough">
              <span>Coordinate</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;