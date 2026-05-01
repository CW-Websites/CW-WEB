const { useState, useEffect } = React;

function Nav({ sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // find section nearest top
      const probe = window.scrollY + 120;
      let current = 'top';
      for (const id of ['techniques', 'capabilities', 'deliverables', 'approach', 'contact']) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="CoorWorks home">
          <img src="assets/logo.png" alt="CoorWorks" />
          <span className="nav__tagline">achieve breakthrough results</span>
        </a>
        <div className="nav__links">
          {NAV_LINKS.map((l) =>
          <a
            key={l.id}
            href={'#' + l.id}
            className={'nav__link' + (active === l.id ? ' active' : '')}>
            
              <span className="dot" />{l.label}
            </a>
          )}
        </div>
        <a href="#contact" className="nav__cta">Contact Us →</a>
      </div>
      <div className="nav__strip">
        <span className="nav__strip-badge">
          <span className="pulse" />
          <span className="mono">FALLS CHURCH, VA · OPERATING 24 × 7</span>
        </span>
      </div>
    </nav>);

}

window.Nav = Nav;