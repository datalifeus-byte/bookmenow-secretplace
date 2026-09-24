import { images } from '../assets/images'
import { useI18n } from '../i18n/I18nProvider'
import { Picture } from './Picture'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="false">
        <Picture
          src={images.hero}
          alt={t.hero.imageAlt}
          className="hero-picture"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-scrim" />
      </div>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-bars">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ ['--i' as string]: i }} />
          ))}
        </div>
      </div>
      <div className="container hero-content">
        <p className="hero-brand animate-in">{t.hero.brand}</p>
        <h1 className="animate-in delay-1">{t.hero.tagline}</h1>
        <p className="hero-lead animate-in delay-2">{t.hero.lead}</p>
        <div className="hero-cta animate-in delay-3">
          <a className="btn" href="#contacts">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="#products">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
