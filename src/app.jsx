const { useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C8472B",
  "rotateSeconds": 8,
  "showGrid": true,
  "fontPair": "tight-plex"
}/*EDITMODE-END*/;

function useScrollReveal() {
  useEffectApp(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function applyTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent || '#C8472B');
  if (t.fontPair === 'tight-plex') {
    root.style.setProperty('--sans', "'Inter Tight', system-ui, sans-serif");
    root.style.setProperty('--mono', "'IBM Plex Mono', ui-monospace, monospace");
  } else if (t.fontPair === 'mono-only') {
    root.style.setProperty('--sans', "'IBM Plex Mono', ui-monospace, monospace");
  }
  // grid visibility
  document.querySelectorAll('.grid-bg').forEach(el => {
    el.style.display = t.showGrid ? '' : 'none';
  });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useScrollReveal();

  useEffectApp(() => { applyTweaks(t); }, [t]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Techniques />
        <Capabilities />
        <Breakthroughs rotateSeconds={Number(t.rotateSeconds) || 8} />
        <StatsStrip />
        <Approach rotateSeconds={Number(t.rotateSeconds) || 8} />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor label="Accent"
                    value={t.accent}
                    onChange={(v) => setTweak('accent', v)}/>
        <TweakRadio label="Type"
                    value={t.fontPair}
                    onChange={(v) => setTweak('fontPair', v)}
                    options={[
                      { value: 'tight-plex', label: 'Tight + Plex' },
                      { value: 'mono-only', label: 'All Plex' },
                    ]}/>
        <TweakSection label="Behavior" />
        <TweakSlider label="Rotation"
                     value={Number(t.rotateSeconds)}
                     onChange={(v) => setTweak('rotateSeconds', v)}
                     min={4} max={20} step={1} unit="s"/>
        <TweakToggle label="Schematic grid"
                     value={!!t.showGrid}
                     onChange={(v) => setTweak('showGrid', v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
