import { images } from '../assets/images'
import { useI18n } from '../i18n/I18nProvider'
import { Picture } from './Picture'

const appImages = [images.building, images.pour, images.siteAerial] as const

export function Production() {
  const { t } = useI18n()

  return (
    <section className="section production" id="production">
      <div className="container">
        <div className="production-head">
          <div>
            <p className="eyebrow">{t.production.eyebrow}</p>
            <h2>{t.production.title}</h2>
            <p className="section-lead">{t.production.lead}</p>
          </div>
          <Picture
            src={images.production}
            alt={t.production.imageAlt}
            className="production-photo"
          />
        </div>
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
          {t.production.applications.map((app, i) => (
            <article key={app.title} className="app-card">
              <Picture
                src={appImages[i]}
                alt={app.imageAlt}
                className="app-photo"
              />
              <h4>{app.title}</h4>
              <p>{app.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
