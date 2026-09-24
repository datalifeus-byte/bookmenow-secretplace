import { useI18n } from '../i18n/I18nProvider'

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
          </div>
          <ul className="stat-list">
            {t.about.stats.map((s) => (
              <li key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
