/* ——— Why Track/Trace ——————————————————————————————————————————————
   Closing argument before the contact / Schedule Demo section.
   Three "A"s — Adaptation, Advancement, Automation — orbit the platform.
   Centerpiece is an SVG diagram inspired by the user's sketch:
   a dashed "Process" container holding the three A's connected by curved
   arrows, sitting on top of a solid TRACK/TRACE "Platform" bar.
   ——————————————————————————————————————————————————————————————— */

const TNT_WHY_PILLARS = [
{
  k: 'Adaptation',
  body: 'Configured against your operating model — branches, vaults, contracts, ledgers, billing, integrations. Not a template, not a forced retrofit.',
  pts: ['Operating-model fit', 'On-demand integrations', 'Co-managed configuration']
},
{
  k: 'Advancement',
  body: 'Your roadmap, our weekly cadence. The platform compounds — every operator benefits as new capability ships, with you helping direct what comes next.',
  pts: ['Weekly release cadence', 'Customer-driven roadmap', 'Compounding capability']
},
{
  k: 'Automation',
  body: 'CIT, ATM and FLM/SLM service operations engineered for cash logistics — locks, routes, reassigns, settlements, exceptions — automated end-to-end.',
  pts: ['Lock dispatch + close enforcement', 'Route & exception automation', 'Settlement & reassign flows']
}];


function TNTWhyDiagram() {
  return (
    <svg className="why__diagram" viewBox="0 0 1100 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <marker id="why-arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
          <path d="M1 1 L11 6 L1 11 Z" fill="var(--accent-2)" />
        </marker>
      </defs>

      {/* Row labels */}
      <g className="why__rowlabel">
        <text x="20" y="170" textAnchor="start">Process</text>
        <text x="20" y="430" textAnchor="start">Platform</text>
      </g>

      {/* Dashed Process container */}
      <rect x="120" y="40" width="960" height="290" rx="6" ry="6"
      fill="none" stroke="var(--ink)" strokeWidth="1.5"
      strokeDasharray="6 6" opacity="0.55" />

      {/* Curved connector arrows — top arcs (outbound) */}
      <path d="M 280 175 C 360 60, 510 60, 590 175" fill="none"
      stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#why-arrow)" />
      <path d="M 720 175 C 800 60, 950 60, 1020 175" fill="none"
      stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#why-arrow)" />

      {/* Curved connector arrows — bottom arcs (inbound) */}
      <path d="M 590 215 C 510 320, 360 320, 280 215" fill="none"
      stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#why-arrow)" />
      <path d="M 1020 215 C 950 320, 800 320, 720 215" fill="none"
      stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#why-arrow)" />

      {/* Three A's */}
      <g className="why__words">
        <text x="240" y="205" textAnchor="middle">Adaptation</text>
        <text x="655" y="205" textAnchor="middle">Advancement</text>
        <text x="1060" y="205" textAnchor="end">Automation</text>
      </g>

      {/* Platform bar */}
      <g>
        <rect x="120" y="360" width="960" height="130" rx="6" ry="6" fill="var(--ink)" />
        {/* Inner white pill with logo + wordmark */}
        <rect x="200" y="392" width="800" height="66" rx="33" ry="33" fill="#FFFFFF" />
        <g transform="translate(248,415)">
          {/* Magnifier + arrow glyph (simplified) */}
          <circle cx="14" cy="10" r="11" fill="none" stroke="var(--ink)" strokeWidth="3" />
          <path d="M 22 18 L 33 28" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 4 10 L 14 4 L 14 16 Z" fill="var(--accent-2)" />
        </g>
        <text x="310" y="445" className="why__wordmark" fill="var(--ink)">TRACK/TRACE</text>
      </g>
    </svg>);

}

function TNTWhy() {
  return (
    <section className="section section--paper2" id="why">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Why Track/Trace</div>
          <h2 className="section-head__title">
            Built to Optimize CIT + ATM + FLM<br />
            — <span className="accent">end to end.</span>
          </h2>
          <p className="section-head__lede">
            Three forces compound on one platform. Each one is hard on its own.<br />
            Track/Trace ships them together — and keeps shipping, week after week.
          </p>
        </div>

        <div className="why reveal">
          <div className="why__diagram-wrap">
            <TNTWhyDiagram />
          </div>

          <div className="why__pillars">
            {TNT_WHY_PILLARS.map((p, i) =>
            <div key={p.k} className="why__pillar">
                <div className="why__pillar-num">0{i + 1}</div>
                <div className="why__pillar-name">{p.k}</div>
                <p className="why__pillar-body">{p.body}</p>
                <ul className="why__pillar-pts">
                  {p.pts.map((pt) =>
                <li key={pt}>
                      <span className="why__check" aria-hidden="true">
                        <img src="uploads/check-circle-green.png" alt="" />
                      </span>
                      <span>{pt}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>

          <div className="why__close">
            <div className="why__close-copy">
              <h3>One platform. Your roadmap. Operating <span className="accent">24 × 7.</span></h3>
              <p>If you run CIT, ATM, or FLM/SLM at scale, Track/Trace is the operating system for it. Engineered for cash logistics from the ground up — not retrofitted into it.</p>
            </div>
            <div className="why__close-cta">
              <a className="btn btn--accent" href="#contact">Schedule a demo →</a>
              <a className="btn btn--ghost" href="#process">See the 90-day path</a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
window.TNTWhy = TNTWhy;