import { useState, type FormEvent } from 'react'
import { useLocale } from './locale'
import type { Locale } from './copy'

export function SynergySite() {
  const { t, locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')

  const links = [
    ['#works', t.nav.works],
    ['#rebar', t.nav.rebar],
    ['#approach', t.nav.approach],
    ['#company', t.nav.company],
    ['#contact', t.nav.contact],
  ] as const

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = [
      `${t.contact.name}: ${data.get('name')}`,
      `${t.contact.phone}: ${data.get('phone')}`,
      `${t.contact.object}: ${data.get('object')}`,
      `${t.contact.message}: ${data.get('message')}`,
    ].join('\n')
    setDraft(text)
    void navigator.clipboard?.writeText(text)
  }

  return (
    <div className="syn">
      <header className="syn-bar">
        <a className="syn-mark" href="#top">
          <i aria-hidden="true" />
          {t.footer.brand}
        </a>
        <nav className="syn-nav" aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="syn-bar-end">
          <LangSwitch locale={locale} setLocale={setLocale} label={t.lang.label} uk={t.lang.uk} en={t.lang.en} />
          <button type="button" className="syn-menu-btn" aria-expanded={open} onClick={() => setOpen(true)}>
            {t.nav.menu}
          </button>
        </div>
      </header>

      {open && (
        <div className="syn-sheet" role="dialog" aria-label={t.nav.menu}>
          <button type="button" className="syn-sheet-close" onClick={() => setOpen(false)}>
            {t.nav.close}
          </button>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        <section className="syn-hero">
          <div className="syn-hero-copy">
            <p className="syn-kicker">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="syn-lead">{t.hero.lead}</p>
            <div className="syn-actions">
              <a className="syn-btn" href="#contact">
                {t.hero.primary}
              </a>
              <a className="syn-textlink" href="#works">
                {t.hero.secondary}
              </a>
            </div>
          </div>
          <figure className="syn-hero-photo">
            <img src="/synergy/crane.jpg" alt={t.hero.photoAlt} />
            <figcaption>{t.hero.caption}</figcaption>
          </figure>
        </section>

        <ul className="syn-ribbon" aria-hidden="true">
          {t.ribbon.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <section className="syn-chapter" id="works">
          <header className="syn-chapter-head">
            <span>{t.works.index}</span>
            <div>
              <p className="syn-kicker">{t.works.kicker}</p>
              <h2>{t.works.title}</h2>
              <p>{t.works.lead}</p>
            </div>
          </header>
          <div className="syn-works">
            <ol>
              {t.works.items.map((item, i) => (
                <li key={item.title}>
                  <em>{String(i + 1).padStart(2, '0')}</em>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure>
              <img src="/synergy/building.jpg" alt={t.works.photoAlt} />
            </figure>
          </div>
        </section>

        <section className="syn-rebar" id="rebar">
          <div className="syn-rebar-copy">
            <p className="syn-kicker light">{t.rebar.index} — {t.rebar.kicker}</p>
            <h2>{t.rebar.title}</h2>
            <p>{t.rebar.lead}</p>
            <dl>
              {t.rebar.rows.map((row) => (
                <div key={row.name}>
                  <dt>{row.name}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="syn-note">{t.rebar.note}</p>
          </div>
          <figure>
            <img src="/synergy/crew.jpg" alt={t.rebar.photoAlt} />
          </figure>
        </section>

        <section className="syn-chapter syn-approach" id="approach">
          <header className="syn-chapter-head">
            <span>{t.approach.index}</span>
            <div>
              <p className="syn-kicker">{t.approach.kicker}</p>
              <h2>{t.approach.title}</h2>
            </div>
          </header>
          <ol className="syn-steps">
            {t.approach.steps.map((step, i) => (
              <li key={step.title}>
                <strong>{String(i + 1).padStart(2, '0')}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <figure className="syn-wide">
            <img src="/synergy/plans.jpg" alt={t.approach.photoAlt} />
          </figure>
        </section>

        <section className="syn-company" id="company">
          <figure>
            <img src="/synergy/apartments.jpg" alt={t.company.photoAlt} />
          </figure>
          <div>
            <p className="syn-kicker">{t.company.index} — {t.company.kicker}</p>
            <h2>{t.company.title}</h2>
            <p>{t.company.lead}</p>
            <dl className="syn-facts">
              {t.company.facts.map((fact) => (
                <div key={fact.name}>
                  <dt>{fact.name}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="syn-contact" id="contact">
          <div>
            <p className="syn-kicker">{t.contact.index} — {t.contact.kicker}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.lead}</p>
            <p className="syn-address">
              <span>{t.contact.addressLabel}</span>
              {t.company.facts[6].value}
              <span>{t.contact.hours}</span>
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <label>
              {t.contact.name}
              <input name="name" required placeholder={t.contact.namePh} />
            </label>
            <label>
              {t.contact.phone}
              <input name="phone" required placeholder={t.contact.phonePh} />
            </label>
            <label>
              {t.contact.object}
              <input name="object" required placeholder={t.contact.objectPh} />
            </label>
            <label>
              {t.contact.message}
              <textarea name="message" required rows={4} placeholder={t.contact.messagePh} />
            </label>
            <button className="syn-btn" type="submit">
              {t.contact.submit}
            </button>
            {draft && (
              <pre className="syn-draft" tabIndex={0}>
                {t.contact.copy}
                {'\n\n'}
                {draft}
              </pre>
            )}
          </form>
        </section>
      </main>

      <footer className="syn-foot">
        <strong>{t.footer.brand}</strong>
        <p>{t.footer.legal}</p>
        <p>{t.footer.note}</p>
        <p>{t.footer.credits}</p>
      </footer>
    </div>
  )
}

function LangSwitch({
  locale,
  setLocale,
  label,
  uk,
  en,
}: {
  locale: Locale
  setLocale: (locale: Locale) => void
  label: string
  uk: string
  en: string
}) {
  return (
    <div className="syn-lang" role="group" aria-label={label}>
      <button type="button" aria-pressed={locale === 'uk'} onClick={() => setLocale('uk')}>
        {uk}
      </button>
      <button type="button" aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>
        {en}
      </button>
    </div>
  )
}
