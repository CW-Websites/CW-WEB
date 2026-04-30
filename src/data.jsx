/* ——— CoorWorks data — from updated deck ———————————————— */

const NAV_LINKS = [
  { id: 'techniques',    label: 'Techniques'    },
  { id: 'capabilities',  label: 'Capabilities'  },
  { id: 'deliverables',  label: 'Deliverables'  },
  { id: 'approach',      label: 'Approach'      },
];

const SCOPE_ITEMS = [
  'Companies', 'Business Lines', 'Programs', 'New Ventures', 'Whole Markets'
];

/* ——— Techniques (slide 2) — 10 market/business techniques —————
   Framing: "Implementations-as-a-Service". Blended strategy, execution,
   and technical services expertise aimed at delivering needle-moving outcomes. */
const TECHNIQUES = [
  { t: 'Market Expansions',        s: 'Break into adjacent markets with proven operating spines.' },
  { t: 'Service Evolutions',       s: 'Ship new service models off the same operational rails.' },
  { t: 'Procedural Compliances',   s: 'Turn policy requirements into enforced operating behavior.' },
  { t: 'Automated Operations',     s: 'Replace manual coordination with declarative automation.' },
  { t: 'Billing Velocity',         s: 'Shorten the distance from work-done to cash-collected.' },
  { t: 'Market Share Captures',    s: 'Deploy mechanisms that actually move the share line.' },
  { t: 'Functional Adjacencies',   s: 'Bolt new functions onto platforms already in production.' },
  { t: 'Customer Integrations',    s: 'Customer-facing APIs, portals, and self-service flows.' },
  { t: 'Channel Models',           s: 'Stand up new distribution channels — partner, direct, hybrid.' },
  { t: 'Scales / Diversifications',s: 'Scale the winners, diversify away from single-point risk.' },
];

/* ——— Capabilities (slide 3 + 4) — 15 optimization techniques ——— */
const CAPABILITIES = [
  { t: 'Zero-Trust Controls',                   s: 'Verify every request, every time — no implicit access.' },
  { t: 'Process Transformations',               s: 'Rewrite the operating model, not just the software.' },
  { t: 'Event-Rule Models',                     s: 'Declarative rules that react to operational events.' },
  { t: 'Dynamic Configurations',                s: 'Change operating parameters live — no deployment cycle.' },
  { t: 'Accountable Permissions / Procedures',  s: 'Every action attributable, every procedure auditable.' },
  { t: 'Compliance Enforcements',               s: 'Turn policy into enforced behavior, not just a binder.' },
  { t: 'Streamlinings',                         s: 'Compress steps, remove hand-offs, shorten time-to-done.' },
  { t: 'User Proofings',                        s: 'Guardrails that keep frontline users on the rails.' },
  { t: 'Functional Automations',                s: 'The manual work you keep doing — done by the platform.' },
  { t: 'Adaptive Workflows',                    s: 'Branch logic, edge cases, and human context — handled.' },
  { t: 'Customer Integrations',                 s: 'Customer-facing APIs, portals, and self-service flows.' },
  { t: 'Loss Preventions',                      s: 'Close leakage points before they compound.' },
  { t: 'Expectation Innovations',               s: 'Redefine customer realities to redirect spend to what actually produces.' },
  { t: 'Systems Integrations',                  s: 'Bridge the legacy stack without the rip-and-replace.' },
  { t: 'KPIs / Analytics / Reports',            s: 'The numbers that matter, surfaced where decisions happen.' },
];

/* ——— Breakthroughs Delivered (slides 6–13) ——————————————————
   Four cases, each with a pre-composed hero image (in assets/). */
const BREAKTHROUGHS = [
  {
    id: 'otc',
    category: 'Market Optimization',
    sub:      'ATM Access Management',
    tagline:  'Secured Self Dispatch',
    title:    'Secured ATM Lock Access Automation',
    subtitle: 'Multiple ATM Lock Platforms (Dorma Kaba, S&G, Intergard)',
    volume:   '500K+/mo',
    volumeLabel: 'Secured ATM Opens / Closes',
    image:    'assets/otc.jpg',
    logo:     'assets/logo-otc.png',
    site:     'https://otcanywhere.com',
    appStore: 'https://apps.apple.com/us/app/otc-anywhere-mobile-app/id1491299750',
    playStore:'https://play.google.com/store/apps/details?id=com.coorworks.otc.mobile',
    demoForm: true,
    demoUrl:  'https://otcanywhere.com',
    challenge:'Reduce manpower requirements to staff dispatch support operations while preserving full lock access security and auditability.',
    target:   'Securely automate permitted ATM lock access requests directly from authorized field technicians against multiple industry lock systems.',
    outcome:  'Offloading 95%+ of routine daily manual dispatching.',
  },
  {
    id: 'tnt',
    category: 'Company Optimization',
    sub:      'CIT / ATM / FLM Cash Operations / Logistics',
    tagline:  'Workflow Enforcement',
    title:    'Zero-Trust CIT / ATM / Vault / FLM Operations',
    subtitle: 'Multi-lingual, multi-currency, centrally enforced.',
    volume:   '$3Bn+/mo',
    volumeLabel: 'Secured Cash Processing / Transport',
    image:    'assets/tnt.jpg',
    logo:     'assets/logo-tnt.png',
    site:     'https://trackandtracecash.com',
    playStore:'https://play.google.com/store/apps/details?id=com.coorworks.tnt.mobile',
    demoForm: true,
    demoUrl:  'https://trackandtracecash.com',
    challenge:'Replace a degrading cash logistics platform with a more streamlined, and auditable operations foundation leveraging contemporary technologies for a 24×7 high-volume cash processing / transportation provider.',
    target:   'Provide a simplified, multi-lingual, multi-currency cash operations platform with centralized control enforcements across all aspects of the operations model (vaults, branches, trucks, routes, field users).',
    outcome:  'Reduced onboarding times, increased operating consistency, and centralized auditing of all operational details across billions in monthly cash movements.',
  },
  {
    id: 'elisa',
    category: 'Program Optimization',
    sub:      'Contracted Services Fulfillment + Compliance Mgmt',
    tagline:  'Government Compliance',
    title:    'US Immigration Court Services',
    subtitle: 'Contracted Interpreter Fulfillment + Compliance.',
    volume:   '25k+/mo',
    volumeLabel: 'DOJ / EOIR Interpretation Service Orders',
    image:    'assets/elisa.jpg',
    logo:     'assets/logo-elisa.jpg',
    challenge:'Reduce resources / costs associated with manually coordinating court work order assignments with aligned contract resources, increase contractor compliance with governmental work performance requirements, and avoid government penalties for under-delivering minimum work order fulfillment rates.',
    target:   'Provide an Uber-like open marketplace for DOJ-approved court interpretation contractors to self-select appropriate case loads within defined operating rules and contractor rate preferences.',
    outcome:  '82%+ automated fulfillment of approximately 20–25k/month DOJ-approved interpretation service work orders and massive reduction of internal processing requirements to invoice services.',
  },
  {
    id: 'change',
    category: 'Business Optimization',
    sub:      'Coin Currency Order Processing',
    tagline:  'Revenue Velocity',
    title:    'Coin Currency Processing Management',
    subtitle: 'Digitally transformed internal operations for national coin processing + servicing.',
    volume:   '$100M+/mo',
    volumeLabel: 'Coin Processing Order Flows',
    image:    'assets/change.jpg',
    logo:     'assets/logo-coordinate.png',
    challenge:'Digitally transform internal operations for a national coin processing and servicing operation.',
    target:   'Expedite coin packaging turns and increase overall business velocity.',
    outcome:  '$100M+/mo in fully-auditable coin packaging orders, creation of a new business line for transportation coordination, and increased billing accuracy and speed.',
  },
];

/* ——— Approach — slide 15 (Budget/Timeframe/Goal carousel) —————
   Auto-scroll vertically through the 3 words; display each for 7–10s
   with its 3 bullet points. */
const APPROACH_PILLARS = [
  {
    key: 'budget',
    title: 'Budget',
    sub: 'Engineered against the spend you have — not the retainer you\u2019ve gotten pitched elsewhere.',
    items: [
      'Budget-Driven Solution Engineering',
      'Agile Resourcing',
      'Realistic AI Deployment',
    ],
  },
  {
    key: 'time',
    title: 'Timeframe',
    sub: 'Platform accelerations over bespoke builds — ship in quarters, not years.',
    items: [
      'Platform Accelerations',
      'Iterative Functional Development',
      'Direct Stakeholder Participation',
    ],
  },
  {
    key: 'goal',
    title: 'Goal',
    sub: 'Outcome-aligned — the success condition is the operating metric, not the spec document.',
    items: [
      'Innovation Validation',
      'Collaborative Outcome Targeting',
      'Creative IP Arrangements',
    ],
  },
];

/* Summary stats strip beneath breakthroughs */
const STATS = [
  { num: '$3Bn',   unit: '+/mo', label: 'Cash Processed',     desc: 'Secured cash processing + transport across vaults, branches, and routes.' },
  { num: '500K',   unit: '+/mo', label: 'ATM Opens / Closes', desc: 'Cross-platform ATM lock automation (Kaba, S&G, Intergard).' },
  { num: '25K',    unit: '+/mo', label: 'Service Orders',     desc: 'DOJ / EOIR interpretation service orders — 82%+ automated fulfillment.' },
  { num: '$100M',  unit: '+/mo', label: 'Order Flows',        desc: 'Auditable coin packaging orders across national operations.' },
];

Object.assign(window, {
  NAV_LINKS, SCOPE_ITEMS, TECHNIQUES, CAPABILITIES, BREAKTHROUGHS, APPROACH_PILLARS, STATS
});
