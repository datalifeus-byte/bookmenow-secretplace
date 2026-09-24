import { useI18n } from '../i18n/I18nProvider'

export function Advantages() {
  const { t } = useI18n()

  return (
    <section className="section advantages" id="advantages">
      <div className="container">
        <p className="eyebrow">{t.advantages.eyebrow}</p>
        <h2>{t.advantages.title}</h2>
        <p className="section-lead">{t.advantages.lead}</p>
        <div className="advantage-grid">
          {t.advantages.items.map((item, i) => (
            <article key={item.title} className="advantage-item">
              <span className="adv-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
