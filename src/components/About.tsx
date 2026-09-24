import { images } from '../assets/images'
import { useI18n } from '../i18n/I18nProvider'
import { Picture } from './Picture'

export function About() {
  const { t } = useI18n()

  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <div className="about-grid">
          <div>
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <ul className="stat-list">
              {t.about.stats.map((s) => (
                <li key={s.value}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-media">
            <Picture
              src={images.about}
              alt={t.about.imageAlt}
              className="about-photo primary"
            />
            <Picture
              src={images.aboutSecondary}
              alt={t.about.imageAltSecondary}
              className="about-photo secondary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
