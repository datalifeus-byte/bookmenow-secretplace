import { useI18n } from '../i18n/I18nProvider'
import type { Locale } from '../i18n/translations'

export function Header() {
  const { t, locale, setLocale } = useI18n()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#advantages', label: t.nav.advantages },
    { href: '#production', label: t.nav.production },
    { href: '#contacts', label: t.nav.contacts },
  ]

  const switchLang = (next: Locale) => {
    if (next !== locale) setLocale(next)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label={t.hero.brand}>
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            <strong>{t.hero.brand}</strong>
            <span>{t.hero.tagline}</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t.lang.label}>
            <button
              type="button"
              className={locale === 'uk' ? 'active' : ''}
              onClick={() => switchLang('uk')}
              aria-pressed={locale === 'uk'}
            >
              {t.lang.uk}
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'active' : ''}
              onClick={() => switchLang('en')}
              aria-pressed={locale === 'en'}
            >
              {t.lang.en}
            </button>
          </div>
          <a className="btn btn-sm" href="#contacts">
            {t.nav.request}
          </a>
        </div>
      </div>
    </header>
  )
}
