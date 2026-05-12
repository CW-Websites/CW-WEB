const { useState: useStateC } = React;

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdyoogp';

function Contact() {
  const [form, setForm] = useStateC({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useStateC({});
  const [sent, setSent] = useStateC(false);
  const [submitting, setSubmitting] = useStateC(false);
  const [submitError, setSubmitError] = useStateC(null);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const reset = () => {
    setForm({ name: '', email: '', comment: '' });
    setErrors({});
    setSent(false);
    setSubmitError(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required.';
    if (!form.email.trim()) errs.email = 'Required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';
    if (!form.comment.trim()) errs.comment = 'Required.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.comment,
          _subject: `New contact from ${form.name} — coorworks.com`,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = (data && data.errors && data.errors[0] && data.errors[0].message)
          || 'Something went wrong. Please try again or email support@coorworks.com.';
        setSubmitError(msg);
      }
    } catch (err) {
      setSubmitError('Network error. Please try again or email support@coorworks.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section section--paper2" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__left">
            <div className="eyebrow">Contact</div>
            <h2 style={{marginTop: 18, fontSize: 'clamp(40px, 5.2vw, 80px)', lineHeight: 1, letterSpacing: '-0.035em', fontWeight: 400}}>
              What&rsquo;s <span className="accent">Next</span><span style={{marginLeft: '0.08em'}}>?</span>
            </h2>
            <p className="contact__left-sub">
              Tell us what you&rsquo;re trying to move — margin, velocity,
              compliance, onboarding time, loss rate. A 30-minute working
              session is usually the fastest way to know if there&rsquo;s a fit.
            </p>

            <div className="contact__card">
              <div className="contact__row">
                <div className="contact__row-label">Office</div>
                <div className="contact__row-body">
                  <strong>CoorWorks, Inc.</strong><br />
                  1069 W Broad Street #813<br />
                  Falls Church, VA 22046
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__row-label">Phone</div>
                <div className="contact__row-body">
                  <a href="tel:+17032006225">+1 (703) 200‑6225</a>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__row-label">Email</div>
                <div className="contact__row-body">
                  <a href="mailto:support@coorworks.com">support@coorworks.com</a>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__row-label">Hours</div>
                <div className="contact__row-body">
                  Mon–Fri · 09:00–18:00 ET<br />
                  Platforms operate 24 × 7.
                </div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={submit} noValidate>
            {sent ? (
              <div className="form__success" role="status" aria-live="polite">
                <div className="form__success-mark" aria-hidden="true">
                  <img src="assets/check-circle-green.png" alt=""/>
                </div>
                <h3>Thanks &mdash; we got it.</h3>
                <p>
                  Your message is in. A member of the CoorWorks team will be in touch within one business day.
                </p>
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="form__field">
                  <label className="form__label" htmlFor="f-name">Name</label>
                  <input
                    id="f-name"
                    className={'form__input' + (errors.name ? ' error' : '')}
                    value={form.name} onChange={set('name')}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <div className="form__error">{errors.name}</div>}
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="f-email">Email</label>
                  <input
                    id="f-email" type="email"
                    className={'form__input' + (errors.email ? ' error' : '')}
                    value={form.email} onChange={set('email')}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <div className="form__error">{errors.email}</div>}
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="f-comment">Comment</label>
                  <textarea
                    id="f-comment" rows="4"
                    className={'form__textarea' + (errors.comment ? ' error' : '')}
                    value={form.comment} onChange={set('comment')}
                    placeholder="What are you trying to move?"
                  />
                  {errors.comment && <div className="form__error">{errors.comment}</div>}
                </div>
                {submitError && (
                  <div className="form__error" style={{marginBottom: 12}}>{submitError}</div>
                )}
                <button type="submit" className="btn btn--primary form__submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send'}
                  {!submitting && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h4>CoorWorks</h4>
            <p style={{margin: 0, lineHeight: 1.6, opacity: 0.8, fontSize: 14, maxWidth: '34ch'}}>
              Platforms to scale margin and increase revenue velocity. Engineered
              for companies, business lines, programs, new ventures, and whole markets.
            </p>
          </div>
          <div className="footer__col">
            <h4>Site</h4>
            <ul>
              <li><a href="#techniques">Techniques</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#deliverables">Deliverables</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Deliverables</h4>
            <ul>
              <li><a href="#deliverables">OTC Anywhere</a></li>
              <li><a href="#deliverables">Track/Trace</a></li>
              <li><a href="#deliverables">ELISA</a></li>
              <li><a href="#deliverables">Coordinate</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>1069 W Broad Street #813</li>
              <li>Falls Church, VA 22046</li>
              <li><a href="tel:+17032006225">+1 (703) 200‑6225</a></li>
              <li><a href="mailto:support@coorworks.com">support@coorworks.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          CoorWorks<span className="accent">.</span>
        </div>

        <div className="footer__legal">
          <span>© {new Date().getFullYear()} CoorWorks, Inc. All rights reserved.</span>
          <span className="footer__legal-links">
            <a href="terms.html">Terms of Use</a>
            <span className="sep">·</span>
            <a href="privacy.html">Privacy Policy</a>
          </span>
          <span>Operating 24 × 7 · v3.0</span>
        </div>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
