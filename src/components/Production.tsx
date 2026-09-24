import { useI18n } from '../i18n/I18nProvider'

export function Production() {
  const { t } = useI18n()

  return (
    <section className="section production" id="production">
      <div className="container">
        <p className="eyebrow">{t.production.eyebrow}</p>
        <h2>{t.production.title}</h2>
        <p className="section-lead">{t.production.lead}</p>
        <ol className="process-steps">
          {t.production.steps.map((step) => (
            <li key={step.num}>
              <span className="step-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="apps-title">{t.production.applicationsTitle}</h3>
        <div className="apps-grid">
          {t.production.applications.map((app) => (
            <article key={app.title}>
              <h4>{app.title}</h4>
              <p>{app.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
